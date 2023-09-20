// CSS
import styles from "./scrab.module.css";
// Library
import React, { useState } from "react";

const ScrabModal = (isOpen, closeModal1) => {
  const [isModalOpen, sestIsModalOpen] = useState(false);
  const closeModal = () => sestIsModalOpen(false);
  const openModal = () => {
    sestIsModalOpen(true);
  };
  return (
    <>
      <div className={styles.ScrapText}>
        <button className={styles.ScrapBtn} type="button" onClick={closeModal1}>
          스크랩
        </button>
        <button className={styles.ScrapBtn} type="button" onClick={closeModal1}>
          최근 본 내역
        </button>
      </div>
    </>
  );
};

export default ScrabModal;
