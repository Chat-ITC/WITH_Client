// CSS
import styles from "./ScrabBtn.module.css";
// PNG
import FillStart from "../../assets/AddInfoIcons/FillStar.png";
import Star from "../../assets/icons/clip.png";
// Library
import React, { useState } from "react";

const ScrabBtn = () => {
  const [btnImage, setBtnImage] = useState({ src: Star, alt: "Star" });

  const handleButtonClick = () => {
    setBtnImage((prevImage) =>
      prevImage.src === Star
        ? { src: FillStart, alt: "FillStar" }
        : { src: Star, alt: "Star" }
    );
  };

  return (
    <>
      <div className={styles.ScrapStar} onClick={handleButtonClick}>
        <img
          className={styles.StarImage}
          src={btnImage.src}
          alt={btnImage.alt}
        />
        <span className={styles.StarText}>star</span>
      </div>
    </>
  );
};

export default ScrabBtn;
