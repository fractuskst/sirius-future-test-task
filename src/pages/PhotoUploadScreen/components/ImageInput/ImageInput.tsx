import styles from "./ImageInput.module.scss";
import UploadIcon from "@/assets/icons/upload.svg?react";
import ReloadIcon from "@/assets/icons/reload.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { setFileUploaded, setPreview } from "@/store/slices/photoUploadSlice";
import type { RootState } from "@/store/store";

type Props = {
  label: string;
  index: number;
};

const ImageInput = ({ label, index }: Props) => {
  const dispatch = useDispatch();
  const previews = useSelector((state: RootState) => state.photoUpload.previews);
  const preview = previews[index];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "application/pdf") {
        dispatch(setPreview({ index, preview: "pdf" }));
      } else {
        const reader = new FileReader();
        reader.onload = () => {
          dispatch(setPreview({ index, preview: reader.result as string }));
        };
        reader.readAsDataURL(file);
      }
      dispatch(setFileUploaded({ index, uploaded: true }));
    } else {
      dispatch(setPreview({ index, preview: null }));
      dispatch(setFileUploaded({ index, uploaded: false }));
    }
  };

  const backgroundStyle = () => {
    if (!preview) return { background: "#f6f6f8" };
    if (preview === "pdf") return { background: `url('/src/assets/icons/pdf.svg') center no-repeat` };

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
          {preview ? <ReloadIcon /> : <UploadIcon />}
        </label>
      </div>
      <span>{label}</span>
    </div>
  );
};

export default ImageInput;
