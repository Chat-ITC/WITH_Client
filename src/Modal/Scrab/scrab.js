// CSS
import styles from "./scrab.module.css";
// Library
import React, { useState } from "react";

function Scrap({ isOpen, children, closeModal }) {
  return (
    <div
      className={styles.Scrap}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <button className={styles.ScrapBtn} onClick={closeModal} />
      <span className={styles.ScrapDesc}>{children}</span>
    </div>
  );
}

export default Scrap;
