import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./Bottom.module.css";

import Quiz from "../../assets/icons/quiz.png";
import Logo from "../../assets/AddInfoIcons/NotLofo.png";
import MyPage from "../../assets/icons/mypage.png";
import { useEffect } from "react";

import { useState } from "react";

const Bottom = ({ logo }) => {
  const [imgQuizClick, setImgQuizClick] = useState(styles.nonClickImg);
  const [strQuizClick, setStrQuizClick] = useState(styles.nonclickStr);
  const [imgHomeClick, setImgHomeClick] = useState(styles.nonClickImg);
  const [strHomeClick, setStrHomeClick] = useState(styles.nonclickStr);
  const [imgMyPageClick, setImgMyPageClick] = useState(styles.nonClickImg);
  const [strMyPageClick, setStrMyPageClick] = useState(styles.nonclickStr);
  console.log(logo);




  useEffect(() => {
    switch (logo) {
      case 'quiz':
        setImgQuizClick(styles.clickImg);
        setStrQuizClick(styles.clickStr);
        setImgHomeClick(styles.nonClickImg);
        setStrHomeClick(styles.nonclickStr);
        setImgMyPageClick(styles.nonClickImg);
        setStrMyPageClick(styles.nonclickStr);
        break;
      case 'home':
        setImgQuizClick(styles.nonClickImg);
        setStrQuizClick(styles.nonclickStr);
        setImgHomeClick(styles.clickImg);
        setStrHomeClick(styles.clickStr);
        setImgMyPageClick(styles.nonClickImg);
        setStrMyPageClick(styles.nonclickStr);
        break;
      case 'mypage':
        setImgQuizClick(styles.nonClickImg);
        setStrQuizClick(styles.nonclickStr);
        setImgHomeClick(styles.nonClickImg);
        setStrHomeClick(styles.nonclickStr);
        setImgMyPageClick(styles.clickImg);
        setStrMyPageClick(styles.clickStr);
        break;
      default:
        break;
    }
  }, [logo]); // logo가 변경될 때만 useEffect가 실행됩니다.


  return (
    <div className={styles.bottomContainer}>
    <nav>
      <ul className={styles.BottomInfo}>
        <Link to="/Quiz">
          <li className={styles.bottomLink}>
            <img
              className={imgQuizClick}
              src={Quiz}
              alt="퀴즈"
            />
            <div
              className={strQuizClick}

            >
              퀴즈
            </div>

          </li>
        </Link>
        <Link to="/HomePage">
          <li className={styles.bottomLink}>

            <img

              className={imgHomeClick}
              src={Logo}
              alt="홈"
            />
            <div
              className={strHomeClick}

            >
              홈
            </div>
          </li>
        </Link>
        <Link to="/MyPage">
          <li className={styles.bottomLink}>

            <img


              className={imgMyPageClick}
              src={MyPage}
              alt="내 정보"
            />
            <div
              className={strMyPageClick}

            >
              내 정보
            </div>

          </li>
        </Link>
      </ul>
    </nav>
  </div>
);
};
export default Bottom;