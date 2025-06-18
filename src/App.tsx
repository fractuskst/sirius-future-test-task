import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import styles from "./App.module.scss";
import PhotoUploadScreen from "@/pages/PhotoUploadScreen/PhotoUploadScreen";
import QuestionScreen from "@/pages/QuestionScreen/QuestionScreen";
import ResultScreen from "@/pages/ResultScreen/ResultScreen";
import WelcomeScreen from "@/pages/WelcomeScreen/WelcomeScreen";
import { ROUTES } from "./routes/routes";
import Header from "@/components/Header/Header";

const App = () => {
  return (
    <div className={styles.container}>
      <Router>
        <Header />
        <Routes>
          <Route path={ROUTES.welcome} element={<WelcomeScreen />} />
          <Route path={ROUTES.upload} element={<PhotoUploadScreen />} />
          <Route path={ROUTES.questions} element={<QuestionScreen />} />
          <Route path={ROUTES.result} element={<ResultScreen />} />
          <Route path={ROUTES.notFound} element={<Navigate to={ROUTES.welcome} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
