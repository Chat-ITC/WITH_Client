//css
import styles from "./RecordPage.module.css";
//component
import Bottom from "../../component/Bottom/Bottom";
import ScrapItem from "../../component/ScrapItem/ScrapItem";
//png
import Back from "../../assets/AddInfoIcons/back.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";

const RecordPage = () => {
  return (
    <>
      <header className={styles.RecordHeader}>
        <Link className={styles.BackBtn} to="/MyPage">
          <img className={styles.BackImg} src={Back} alt="뒤로가기" />
        </Link>
        <h1 className={styles.RecordTitle}>최근 본 내역</h1>
      </header>
      <Bottom />
    </>
  );
};

export default RecordPage;
