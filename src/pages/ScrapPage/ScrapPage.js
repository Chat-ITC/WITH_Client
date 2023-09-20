//css
import styles from "./ScrapPage.module.css";
//component
import Bottom from "../../component/Bottom/Bottom";
import ScrapItem from "../../component/ScrapItem/ScrapItem";

//library
import React from "react";

const ScrapPage = () => {
  return (
    <>
      <header className={styles.ScrapHeader}>스크랩</header>
      <Bottom />
    </>
  );
};

export default ScrapPage;
