import styles from "./Form.module.scss";
import ImageInput from "../ImageInput/ImageInput";

const LABELS = [
  { id: 0, text: "Дом, дерево, человек" },
  { id: 1, text: "Несуществующее животное" },
  { id: 2, text: "Автопортрет" },
];

const Form = () => {
  return (
    <div className={styles.container}>
      {LABELS.map((label, index) => (
        <ImageInput key={label.id} label={label.text} index={index} />
      ))}
    </div>
  );
};

export default Form;
