import styles from './Input.module.css';
import {ChangeEvent, FormEvent} from "react";

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: FormEvent<HTMLFormElement>) => void;
  value: string;
}

export default function Input({onChange, onClick, value}: Props) {
  return (
    <form className={styles.inputBox} onSubmit={onClick}>
      <input
        className={styles.input}
        type="text"
        placeholder="What is your goal?"
        onChange={onChange}
        value={value}
      />
      <button type="submit" className={styles.button}>
        Send
      </button>
    </form>
  );
}