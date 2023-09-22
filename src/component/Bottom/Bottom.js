import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./Bottom.module.css";

import Quiz from "../../assets/logo/SelectQuiz.png";
import Logo from "../../assets/logo/SelectHome.png";
import MyPage from "../../assets/logo/SelectMyPage.png";
import React, { useEffect, useState } from "react";

const Bottom = ({ logo }) => {
  const [imgQuizClick, setImgQuizClick] = useState(styles.nonClickImg);
  const [imgHomeClick, setImgHomeClick] = useState(styles.nonClickImg);
  const [imgMyPageClick, setImgMyPageClick] = useState(styles.nonClickImg);
  console.log(logo);

  useEffect(() => {
    switch (logo) {
      case "quiz":
        setImgQuizClick(styles.clickImg);
        setImgHomeClick(styles.nonClickImg);
        setImgMyPageClick(styles.nonClickImg);
        break;
      case "home":
        setImgQuizClick(styles.nonClickImg);
        setImgHomeClick(styles.clickImg);
        setImgMyPageClick(styles.nonClickImg);
        break;
      case "mypage":
        setImgQuizClick(styles.nonClickImg);
        setImgHomeClick(styles.nonClickImg);
        setImgMyPageClick(styles.clickImg);
        break;
      default:
        break;
    }
  }, [logo]); // logo가 변경될 때만 useEffect가 실행됩니다.

  return (
    <div className={styles.bottomContainer}>
      <ul className={styles.BottomInfo}>
        <Link to="/Quiz">
          <li className={styles.bottomLink}>
            <img className={imgQuizClick} src={Quiz} alt="퀴즈" />
          </li>
        </Link>
        <Link to="/HomePage">
          <li className={styles.bottomLink}>
            <img className={imgHomeClick} src={Logo} alt="홈" />
          </li>
        </Link>
        <Link to="/MyPage">
          <li className={styles.bottomLink}>
            <img className={imgMyPageClick} src={MyPage} alt="내 정보" />
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default Bottom;
