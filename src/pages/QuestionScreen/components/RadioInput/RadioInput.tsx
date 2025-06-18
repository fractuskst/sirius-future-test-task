import styles from "./RadioInput.module.scss";

type Props = {
  label: string;
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const RadioInput = ({ label, name, ...rest }: Props) => {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="radio" id={label} name={name} value={label} {...rest} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default RadioInput;
