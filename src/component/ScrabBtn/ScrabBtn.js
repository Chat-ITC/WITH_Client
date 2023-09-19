//css
import styles from "./ScrabBtn.module.css";
//png
import FillStart from "../../assets/AddInfoIcons/FillStar.png";
import Star from "../../assets/icons/clip.png";
//library
import React, { useState } from "react";

const ScrabBtn = () => {
  const [BtnStar, setStar] = useState({ Star });

  const handleButtonClick = () => {
    setStar((prevImage) => (prevImage === Star ? FillStart : Star));
  };
  return (
    <>
      <div className={styles.ScrapStar} onClick={handleButtonClick}>
        <img className={styles.StarImage} src={BtnStar} alt="Scrap" />
        <span className={styles.StarText}>star</span>
      </div>
    </>
  );
};

export default ScrabBtn;
