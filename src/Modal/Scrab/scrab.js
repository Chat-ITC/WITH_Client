// CSS
import styles from "./scrab.module.css";
// Library
import React, { useState } from "react";

const ScrabModal = (isOpen, isClose) => {
  const [isModalOpen, sestIsModalOpen] = useState(null);
  const closeModal = () => sestIsModalOpen(false);

  return (
    <>
      <div
        style={{ display: isOpen ? "block" : "none" }}
        className={styles.ScrapText}
      >
        <button className={styles.ScrapBtn} type="button" onClick={isClose}>
          스크랩
        </button>
        <button className={styles.ScrapBtn} type="button" onClick={isClose}>
          최근 본 내역
        </button>
      </div>
    </>
  );
};

export default ScrabModal;
