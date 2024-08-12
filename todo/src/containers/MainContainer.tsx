import styles from './MainContainer.module.css';
import {ChangeEvent, FormEvent, MouseEvent, useState} from "react";
import {Goal, Input} from "../components";
import dayjs from "dayjs";
import {MdPlaylistAdd} from "react-icons/md";

interface Goal {
  msg: string;
  status: boolean;
}

export default function MainContainer() {

  const [memoData, setMemoData] = useState(new Map<string, Goal[]>());
  const [currentDate, setCurrentDate] = useState("");
  const [goalMsg, setGoalMsg] = useState("");

  const onAddDateHandler = () => {
    const tempCurrentDate = dayjs().format("YYYY.MM.DD HH:mm:ss");
    if (memoData.has(tempCurrentDate)) return;
    setCurrentDate(tempCurrentDate);
    setMemoData((prev) => new Map(prev).set(tempCurrentDate, []));
  };

  const onDateClick = (e: MouseEvent<HTMLLIElement>) => {
    const { id } = e.currentTarget.dataset;
    setCurrentDate(id || '');
  };

  const onMsgClickHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentGoalList = memoData.get(currentDate) || [];
    setMemoData((prev) =>
      new Map(prev).set(currentDate, [
        ...currentGoalList,
        { msg: goalMsg, status: false },
      ])
    );
    setGoalMsg("");
  };

  const onChangeMsgHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setGoalMsg(e.target.value);
  };

  const onCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const msg = e.target.dataset.msg;
    const currentGoalList = memoData.get(currentDate) || [];
    const newGoalList = currentGoalList.map((goal: Goal) => {
      if (goal.msg === msg) {
        return { ...goal, status: checked };
      }
      return goal
    });
    setMemoData((prev) => new Map(prev).set(currentDate, newGoalList));
  };

  return (
    <div className={styles.memoContainer}>
      <div className={styles.memoWrap}>
        <nav className={styles.sidebar}>
          <ul className={styles.dateList}>
            {
              Array.from(memoData.keys()).map((v) => (
                <li
                  className={styles.li}
                  key={v}
                  data-id={v}
                  onClick={onDateClick}
                >
                  {v}
                </li>
              ))
            }
          </ul>
          <div className={styles.addWrap}>
            <MdPlaylistAdd
              size="30"
              color="#edd200"
              style={{ cursor: "pointer" }}
              onClick={onAddDateHandler}
            />
          </div>
        </nav>
        <section className={styles.content}>
          {memoData.size > 0 && (
            <>
              <ul className={styles.goals}>
                {(memoData.get(currentDate) || []).map((goal: Goal, i) => (
                  <li key={`goal_${i}`}>
                    <Goal
                      id={`goal_${i}`}
                      msg={goal.msg}
                      status={goal.status}
                      onCheckChange={onCheckChange}
                    />
                  </li>
                ))}
              </ul>
              <Input
                value={goalMsg}
                onClick={onMsgClickHandler}
                onChange={onChangeMsgHandler}
              />
            </>
          )}
        </section>
      </div>
    </div>
  );
}
