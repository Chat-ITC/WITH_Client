import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Bottom.module.css";

import SelectHome from "../../assets/AddInfoIcons/SelectHome.png";
import SelectQuiz from "../../assets/AddInfoIcons/SelectQuiz.png";
import SelectMyPage from "../../assets/AddInfoIcons/SelectMyPage.png";
import UnHome from "../../assets/AddInfoIcons/UnSelectHome.png";
import UnQuiz from "../../assets/AddInfoIcons/UnSelectQuiz.png";
import UnPage from "../../assets/AddInfoIcons/UnSelectMyPage.png";

const Bottom = () => {
  const navigate = useNavigate();
  const [homeImage, setHomeImage] = useState(SelectHome);
  const [quizImage, setQuizImage] = useState(UnQuiz);
  const [myPageImage, setMyPageImage] = useState(UnPage);

  const handleHomeButtonClick = () => {
    setHomeImage(SelectHome);
    setQuizImage(UnQuiz);
    setMyPageImage(UnPage);
    setTimeout(() => {
      navigate("/HomePage");
    }, 100);
  };

  const handleQuizButtonClick = () => {
    setHomeImage(UnHome);
    setQuizImage(SelectQuiz);
    setMyPageImage(UnPage);
    setTimeout(() => {
      navigate("/Quiz");
    }, 100);
  };

  const handleMyPageButtonClick = () => {
    setHomeImage(UnHome);
    setQuizImage(UnQuiz);
    setMyPageImage(SelectMyPage);

    setTimeout(() => {
      navigate("/Mypage");
    }, 100);
  };

  return (
    <div className={styles.bottomContainer}>
      <nav>
        <ul className={styles.BottomInfo}>
          <li className={styles.bottomLink}>
            <button
              className={styles.bottom_Link}
              onClick={handleQuizButtonClick}
            >
              <img className={styles.bottom_img} src={quizImage} alt="퀴즈" />
            </button>
          </li>
          <li className={styles.bottomLink}>
            <button onClick={handleHomeButtonClick}>
              <img src={homeImage} alt="Home" className={styles.bottom_img} />
            </button>
          </li>
          <li className={styles.bottomLink}>
            <button onClick={handleMyPageButtonClick}>
              <img
                src={myPageImage}
                alt="MyPage"
                className={styles.bottom_img}
              />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Bottom;
