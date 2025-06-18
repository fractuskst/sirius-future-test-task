import styles from "./QuestionScreen.module.scss";
import TextInput from "./components/TextInput/TextInput";
import RadioInput from "./components/RadioInput/RadioInput";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { setChildDateOfBirth, setChildGender, setChildName, setParentName } from "@/store/slices/survey/surveySlice";
import CustomDatePicker from "./components/CustomDatePicker/CustomDatePicker";

const QuestionScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { childDateOfBirth, childGender } = useSelector((state: RootState) => state.survey);
  const selectedDate = childDateOfBirth ? new Date(childDateOfBirth) : null;

  const handleChildNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    dispatch(setChildName(name));
  };

  const handleParentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    dispatch(setParentName(name));
  };

  const handleDateOfBirthChange = (date: Date | null) => {
    const unixTime = date ? date.getTime() : null;
    dispatch(setChildDateOfBirth(unixTime));
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const gender = e.target.value;
    dispatch(setChildGender(gender));
  };

  return (
    <div className={styles.container}>
      <div className={styles.childMainInfo}>
        <h2>Общая информация о ребенке</h2>
        <div className={styles.formFields}>
          <TextInput label="Имя ребенка" onChange={handleChildNameChange} />
          <CustomDatePicker selectedDate={selectedDate} onDateOfBirthChange={handleDateOfBirthChange} />
          <div className={styles.gender}>
            <span>Пол ребенка</span>
            <div className={styles.genderRadio}>
              <RadioInput label="Мужской" name="gender" checked={childGender === "Мужской"} onChange={handleGenderChange} />
              <RadioInput label="Женский" name="gender" checked={childGender === "Женский"} onChange={handleGenderChange} />
            </div>
          </div>
          <TextInput label="Имя родителя, заполняющего анкету" onChange={handleParentNameChange} />
        </div>
      </div>
    </div>
  );
};

export default QuestionScreen;
