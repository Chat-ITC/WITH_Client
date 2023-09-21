// CSS
import styles from "./scrab.module.css";
// Library
import React, { useState } from "react";

function Scrap({ isOpen, children, closeModal }) {
  return (
    <span
      className={styles.Scrap}
      style={{ display: isOpen ? "inline" : "none" }}
    >
      <button className={styles.ScrapBtn} onClick={closeModal} />
      <span className={styles.ScrapDesc}>{children}</span>
    </span>
  );
}

export default Scrap;
