import Bottom from "../../component/Bottom/Bottom";
import styles from "./Quiz.module.css";
//png
import Back from "../../assets/AddInfoIcons/back.png";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Quiz = (props) => {
  const { quizTarget } = props;















  return (
    <>
      <header className={styles.Quiz_header}>
        <Link className={styles.BackBtn} type="button" to="/MyPage">
          <img src={Back} alt="뒤로가기" />
        </Link>
        <h1 className={styles.BackTitle}>{quizTarget}를 위한 문제</h1>
      </header>
      <Bottom />
    </>
  );
};

export default Quiz;
