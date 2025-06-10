import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import getStepFromPath from "@/utils/getStepFromPath";

const Header = () => {
  const location = useLocation();

  const step = getStepFromPath(location.pathname);

  return (
    step > 0 && (
      <header className={styles.container}>
        <div className={styles.progress} data-step={step} />
      </header>
    )
  );
};

export default Header;
