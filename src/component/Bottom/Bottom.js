import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./Bottom.module.css";

import Quiz from "../../assets/icons/quiz.png";
import Logo from "../../assets/AddInfoIcons/NotLofo.png";
import MyPage from "../../assets/icons/mypage.png";

import { useState } from "react";

const Bottom = () => {
  ////수정 코드
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  /////

  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <div className={styles.bottomContainer}>
      <nav>
        <ul className={styles.BottomInfo}>
          <li className={styles.bottomLink}>
            <Link
              className={styles.bottom_Link}
              to="/Quiz"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                onClick={() => handleButtonClick(1)}
                style={{ filter: isClicked ? "grayscale(100%)" : "none" }}
                className={styles.bottom_img}
                src={Quiz}
                alt="퀴즈"
              />
              <div
                className={styles.Bottom_title}
                onClick={() => handleButtonClick(1)}
                style={{ color: activeButton === 1 ? "black" : "#bababa" }}
              >
                퀴즈
              </div>
            </Link>
          </li>
          <li className={styles.bottomLink}>
            <Link
              to="/HomePage"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                onClick={() => handleButtonClick(2)}
                style={{
                  filter:
                    activeButton === 2
                      ? "opacity(1) drop-shadow(0 0 0 black)"
                      : "#bababa",
                }}
                className={styles.bottom_img}
                src={Logo}
                alt="홈"
              />
              <div
                className={styles.Bottom_title}
                onClick={() => handleButtonClick(2)}
                style={{ color: activeButton === 2 ? "black" : "#bababa" }}
              >
                홈
              </div>
            </Link>
          </li>
          <li className={styles.bottomLink}>
            <Link
              to="/MyPage"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                onClick={() => handleButtonClick(3)}
                style={{
                  filter:
                    activeButton === 3
                      ? "opacity(1) drop-shadow(0 0 0 black)"
                      : "#bababa",
                }}
                className={styles.bottom_img}
                src={MyPage}
                alt="내 정보"
              />
              <div
                className={styles.Bottom_title}
                onClick={() => handleButtonClick(3)}
                style={{ color: activeButton === 3 ? "black" : "#bababa" }}
              >
                내 정보
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Bottom;
