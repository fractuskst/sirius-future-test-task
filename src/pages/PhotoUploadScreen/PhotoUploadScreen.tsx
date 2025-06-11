import getStepFromPath from "@/utils/getStepFromPath";
import Form from "./components/Form/Form";
import styles from "./PhotoUploadScreen.module.scss";
import AlertIcon from "@/assets/icons/alert.svg?react";
import ArrowRight from "@/assets/icons/arrow-right.svg?react";

import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

const PhotoUploadScreen = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const uploadedFiles = useSelector((state: RootState) => state.photoUpload.uploadedFiles);
  const allFilesUploaded = uploadedFiles.every(Boolean);

  const step = getStepFromPath(pathname);

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
        <button onClick={() => navigate("/questions")} disabled={!allFilesUploaded}>
          {"Далее"}
          <ArrowRight stroke={allFilesUploaded ? "#fff" : "#44537180"} />
        </button>
      </footer>
    </div>
  );
};

export default PhotoUploadScreen;
