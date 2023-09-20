import { useEffect, useState } from "react";
import axios from "axios";
//png
import FillStar from "../../assets/AddInfoIcons/FillStar.png";
import Star from "../../assets/icons/clip.png";
//css
import styles from "./ScrapItem.module.css";
//component
import ScrapBtn from "../../component/ScrabBtn/ScrabBtn";

const ScrapItem = ({historyData}) => {
  console.log(historyData);
  console.log(historyData.title);
  //content, createAt, fav_language, id, isScrapped, title
  return (
    <>
      <div className={styles.ScrapItem}>
        
        <div className={styles.ScrapTop}>
          <h2 className={styles.Title}>{historyData.title}</h2>
          <ScrapBtn />
        </div>

        <p className={styles.Content}>
          {historyData.content}
        </p>
        <span className={styles.Language}>{historyData.fav_language}</span>
      </div>

      <div className={styles.ScrapItem}>
        <h2 className={styles.Title}>제목입니다.</h2>
        <p className={styles.Content}>
          일이삼사오육칠팔구십일이삼사오육칠팔구십.
        </p>
        <span className={styles.Language}>선호하는 언어입니다.</span>
      </div>
    </>
  );
};

export default ScrapItem;
