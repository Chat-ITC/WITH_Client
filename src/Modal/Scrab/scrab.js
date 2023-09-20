// CSS
import styles from "./scrab.module.css";
// Library
import React, { useState } from "react";

function Scrap(isOpen, closeModal) {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <p>Modal</p>
      <button onClick={closeModal}>close</button>
    </div>
  );
}

export default Scrap;
