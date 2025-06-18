import getStepFromPath from "@/utils/getStepFromPath";
import Form from "./components/Form/Form";
import styles from "./PhotoUploadScreen.module.scss";
import AlertIcon from "@/assets/icons/alert.svg?react";
import ArrowRight from "@/assets/icons/arrow-right.svg?react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { uploadPhotos } from "@/store/slices/photoUpload/photoUploadThunks";
import { setError, setLoading, setTaskId } from "@/store/slices/photoUpload/photoUploadSlice";

const PhotoUploadScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { files, loading, error } = useSelector((state: RootState) => state.photoUpload);
  const allFilesUploaded = files.length === 3;

  const step = getStepFromPath(pathname);

  const handleNextClick = async () => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));
      const taskId = await dispatch(uploadPhotos(files)).unwrap();
      dispatch(setTaskId(taskId));
      navigate("/questions");
    } catch (error) {
      let errorMessage = "Произошла непредвиденная ошибка";

      if (typeof error === "string") {
        errorMessage = error;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      } else if (error && typeof error === "object" && "message" in error) {
        errorMessage = String(error.message);
      }

      dispatch(setError(errorMessage));
      console.error("Ошибка загрузки:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.headerBlock}>
          <h2>Загрузите фотографии рисунков</h2>
          <div className={styles.alert}>
            <AlertIcon />
            <span className={styles.alertText}>Допустимые форматы файлов: jpg, jpeg, png, pdf. Размер не более 5 Мб</span>
          </div>
        </div>
        <Form />
      </div>
      <footer className={styles.footer}>
        <span className={styles.step}>{`Шаг ${step}/3`}</span>
        <button className={styles.button} onClick={handleNextClick} disabled={!allFilesUploaded || loading}>
          {"Далее"}
          <ArrowRight stroke={allFilesUploaded && !loading ? "#fff" : "#44537180"} />
        </button>
      </footer>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default PhotoUploadScreen;
