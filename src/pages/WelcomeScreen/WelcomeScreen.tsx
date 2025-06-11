import { useNavigate } from "react-router-dom";
import styles from "./WelcomeScreen.module.scss";
import ForwardRightIcon from "@/assets/icons/forward-right.svg?react";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2>Карта развития ребёнка: AI-диагностика</h2>
      <button className={styles.button} onClick={() => navigate("/upload")}>
        <span>Начать тест</span>
        <ForwardRightIcon />
      </button>
    </div>
  );
};

export default WelcomeScreen;
