import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./Bottom.module.css";

import Quiz from "../../assets/icons/quiz.png";
import Logo from "../../assets/AddInfoIcons/NotLofo.png";
import MyPage from "../../assets/icons/mypage.png";

import { useState } from "react";

const Bottom = ({ props }) => {
  let imgQuizClick;
  let imgHomeClick;
  let imgMyPageClick;
  let strQuizClick;
  let strHomeClick;
  let strMyPageClick;


  switch (props.logoLoca) {
    case 'quiz':
      imgQuizClick = styles.clickImg;
      strQuizClick = styles.clickStr;
      imgHomeClick = styles.nonClickImg;
      strHomeClick = styles.nonclickStr;
      imgMyPageClick = styles.nonClickImg;
      strMyPageClick = styles.nonclickStr;

      break;
    case 'home':
      imgQuizClick = styles.nonClickImg;
      strQuizClick = styles.nonclickStr
      imgHomeClick = styles.clickImg;
      strHomeClick = styles.clickStr
      imgMyPageClick = styles.nonClickImg;
      strMyPageClick = styles.nonclickStr
      break;
    case 'mypage':
      imgQuizClick = styles.nonClickImg;
      strQuizClick = styles.nonclickStr
      imgHomeClick = styles.nonClickImg;
      strHomeClick = styles.nonclickStr
      imgMyPageClick = styles.clickImg;
      strMyPageClick = styles.clickStr
      break;
    default:
      break;
  }

  return (
    <div className={styles.bottomContainer}>
      <nav>
        <ul className={styles.BottomInfo}>
          <link to="/Quiz">
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
          </link>
          <link to="/Home">
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
          </link>
          <link to="/MyPage">
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
          </link>
        </ul>
      </nav>
    </div>
  );
};

export default Bottom;