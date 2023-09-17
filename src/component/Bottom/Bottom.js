import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./Bottom.module.css";

import Quiz from "../../assets/icons/quiz.png";
import Logo from "../../assets/AddInfoIcons/NotLofo.png";
import MyPage from "../../assets/icons/mypage.png";

const Home = () => <h1>퀴즈</h1>;
const About = () => <h1>홈</h1>;
const Contact = () => <h1>내 정보</h1>;

const Bottom = () => {
  return (
    <div className={styles.bottomContainer}>
      <nav>
        <ul className={styles.BottomInfo}>
          <li className={styles.bottomLink}>
            <img className={styles.bottom_img} src={Quiz} alt="퀴즈" />
            <Link to="/Quiz">퀴즈</Link>
          </li>
          <li className={styles.bottomLink}>
            <img className={styles.bottom_img} src={Logo} alt="홈" />
            <Link to="/Home">홈</Link>
          </li>
          <li className={styles.bottomLink}>
            <img className={styles.bottom_img} src={MyPage} alt="내 정보" />
            <Link to="/MyPage">내 정보</Link>
          </li>
        </ul>
      </nav>

      {/* 각 탭에 대한 라우팅 설정 */}
      {/* <Route path="/Quiz" exact component={퀴즈} />
        <Route path="/Home" component={홈} />
        <Route path="/MyPage" component={내정보} /> */}
    </div>
  );
};

export default Bottom;
