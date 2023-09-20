import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./Bottom.module.css";

import Quiz from "../../assets/icons/quiz.png";
import Logo from "../../assets/AddInfoIcons/NotLofo.png";
import MyPage from "../../assets/icons/mypage.png";

const Bottom = () => {
  return (
    <div className={styles.bottomContainer}>
      <nav>
        <ul className={styles.BottomInfo}>
          <li className={styles.bottomLink}>
            <Link className={styles.bottom_Link} to="/Quiz">
              <img className={styles.bottom_img} src={Quiz} alt="퀴즈" />
              <div className={styles.Bottom_title}>퀴즈</div>
            </Link>
          </li>
          <li className={styles.bottomLink}>
            <Link to="/HomePage">
              <img className={styles.bottom_img} src={Logo} alt="홈" />
              <div className={styles.Bottom_title}>홈</div>
            </Link>
          </li>
          <li className={styles.bottomLink}>
            <Link to="/MyPage">
              <img className={styles.bottom_img} src={MyPage} alt="내 정보" />
              <div className={styles.Bottom_title}>내 정보</div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Bottom;
