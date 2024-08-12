import styles from './Goal.module.css';
import {ChangeEvent} from "react";

interface Props {
  id: string;
  status: boolean;
  msg: string;
  onCheckChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Goal({id, status, msg, onCheckChange}: Props) {
  return (
    <div className={styles.goalWrap}>
      <label
        className={status ? styles.textDisabled : styles.text}
        htmlFor={id}
      >
        {
          // 2
          status && <div className={styles.clean}/>
        }
        <input
          type="checkbox"
          id={id}
          name={id}
          data-msg={msg}
          onChange={onCheckChange}
          checked={status}
        />
        {msg}
      </label>
    </div>
  );
}
