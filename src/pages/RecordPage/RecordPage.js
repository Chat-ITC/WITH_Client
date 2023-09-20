//css
import styles from "./RecordPage.module.css";
//component
import Bottom from "../../component/Bottom/Bottom";
import ScrapItem from "../../component/ScrapItem/ScrapItem";

import React from "react";

const RecordPage = () => {
  return (
    <>
      <header className={styles.RecordHeader}>최근 본 내역</header>
      <Bottom />
    </>
  );
};

export default RecordPage;
