// CSS
import styles from "./scrab.module.css";
// Library
import React, { useState } from "react";

const ScrabModal = () => {
  const [isModalOpen, sestIsModalOpen] = useState(false);
  const closeModal = () => sestIsModalOpen(false);

  return (
    <>
      <div className={styles.ScrapText}>
        <button className={styles.ScrapBtn} type="button" onClick={closeModal}>
          스크랩
        </button>
        <button className={styles.ScrapBtn} type="button" onClick={closeModal}>
          최근 본 내역
        </button>
      </div>
    </>
  );
};

export default ScrabModal;
