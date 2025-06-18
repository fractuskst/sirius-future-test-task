import styles from "./ImageInput.module.scss";
import UploadIcon from "@/assets/icons/upload.svg?react";
import ReloadIcon from "@/assets/icons/reload.svg?react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { setFile, setError } from "@/store/slices/photoUpload/photoUploadSlice";

const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

type Props = {
  label: string;
  index: number;
};

const ImageInput = ({ label, index }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { files, previews } = useSelector((state: RootState) => state.photoUpload);
  const file = files[index];
  const preview = previews[index];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setError(null));
    const inputFile = e.target.files?.[0];
    if (inputFile) {
      if (!allowedTypes.includes(inputFile.type)) {
        dispatch(setError("Неверный формат файла. Разрешены: JPG, PNG, PDF."));
        return;
      }

      if (inputFile.size > 5 * 1024 * 1024) {
        dispatch(setError("Файл слишком большой. Максимальный размер: 5MB"));
        return;
      }
      dispatch(setFile({ index, file: inputFile }));
    }
  };

  const backgroundStyle = () => {
    if (!file) return { background: "#f6f6f8" };
    if (file.type === "application/pdf") return { background: `url('/src/assets/icons/pdf.svg') center no-repeat` };

    return { background: `url(${preview}) center/cover` };
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputArea} style={backgroundStyle()}>
        <input
          type="file"
          accept=".jpg, .jpeg, .png, .pdf"
          id={label}
          className={styles.input}
          onChange={handleFileChange}
        />
        <label htmlFor={label} className={styles.customUpload}>
          {file ? <ReloadIcon /> : <UploadIcon />}
        </label>
      </div>
      <span>{label}</span>
    </div>
  );
};

export default ImageInput;
