// CSS
import styles from "./scrab.module.css";
// Library
import React, { useState } from "react";

const ScrabModal = () => {
  return (
    <>
      <div className={styles.ScrapText}>
        <button className={styles.ScrapBtn}>스크랩</button>
        <button className={styles.ScrapBtn}>최근 본 내역</button>
      </div>
    </>
  );
};

export default ScrabModal;
