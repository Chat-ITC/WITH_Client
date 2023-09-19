// CSS
import Styles from "./scrab.module.css";
// Library
import React, { useState } from "react";

const ScrabModal = () => {
  const [isScrabActive, setScrabActive] = useState(true);
  const [isHistoryActive, setHistoryActive] = useState(false);

  const handleScrabClick = () => {
    setScrabActive(true);
    setHistoryActive(false);
  };

  const handleHistoryClick = () => {
    setScrabActive(false);
    setHistoryActive(true);
  };

  return (
    <>
      <div className={Styles.ScrapText}>
        <button
          className={`${Styles.ScrabBtn} ${isScrabActive ? Styles.Active : ""}`}
          onClick={handleScrabClick}
        >
          스크랩
        </button>
        <button
          className={`${Styles.ScrabBtn} ${
            isHistoryActive ? Styles.Active : ""
          }`}
          onClick={handleHistoryClick}
        >
          최근 본 내역
        </button>
      </div>
    </>
  );
};

export default ScrabModal;
