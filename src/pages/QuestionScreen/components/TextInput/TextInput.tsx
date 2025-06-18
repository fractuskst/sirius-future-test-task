import styles from "./TextInput.module.scss";

type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = ({ label }: Props) => {
  return (
    <div className={styles.container}>
      <label htmlFor={label}>{label}</label>
      <input className={styles.input} type="text" id={label} required />
    </div>
  );
};

export default TextInput;
