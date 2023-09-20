// CSS
import styles from "./scrab.module.css";
// Library
import React, { useState } from "react";

function Scrap(isOpen, children, closeModal) {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <div>{children}</div>
    </div>
  );
}

export default Scrap;
