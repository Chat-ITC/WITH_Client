//css
import styles from "./ScrapPage.module.css";
//component
import Bottom from "../../component/Bottom/Bottom";
import ScrapItem from "../../component/ScrapItem/ScrapItem";
//png
import Back from "../../assets/AddInfoIcons/back.png";

//library
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ScrapPage = () => {
  return (
    <>
      <header className={styles.ScrapHeader}>
        <Link className={styles.BackBtn} to="/MyPage">
          <img src={Back} alt="뒤로가기" />
        </Link>
        <h1 className={styles.ScrapTitle}>스크랩</h1>
      </header>
      <Bottom />
    </>
  );
};

export default ScrapPage;
