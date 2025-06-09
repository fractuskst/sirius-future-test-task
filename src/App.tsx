import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhotoUploadScreen from "@/pages/PhotoUploadScreen/PhotoUploadScreen";
import QuestionScreen from "@/pages/QuestionScreen/QuestionScreen";
import ResultScreen from "@/pages/ResultScreen/ResultScreen";
import WelcomeScreen from "@/pages/WelcomeScreen/WelcomeScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/upload" element={<PhotoUploadScreen />} />
        <Route path="/questions" element={<QuestionScreen />} />
        <Route path="/result" element={<ResultScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
