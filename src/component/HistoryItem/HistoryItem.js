import { useEffect, useState } from "react";
import axios from "axios";
//png
import FillStar from "../../assets/AddInfoIcons/FillStar.png";
import Star from "../../assets/icons/clip.png";
//css
import styles from "./HistoryItem.module.css";

//component
import ScrapBtn from "../ScrabBtn/ScrabBtn";

function TruncateTextTitle({ text, maxLength }) {
  if (text.length <= maxLength) {
    return <h2 className={styles.Title}>{text}</h2>;
  } else {
    const truncatedText = text.substring(0, maxLength) + "...";
    return (
      <span title={text} className={styles.Title}>
        {truncatedText}
      </span>
    );
  }
}

function TruncateTextContent({ text, maxLength }) {
  if (text.length <= maxLength) {
    return <h2 className={styles.Content}>{text}</h2>;
  } else {
    const truncatedText = text.substring(0, maxLength) + "...";
    return (
      <span Content={text} className={styles.Content}>
        {truncatedText}
      </span>
    );
  }
}

const HistoryItem = ({
  title,
  content,
  createAt,
  fav_language,
  id,
  isScrapped,
  
}) => {
  
  const slicedString = createAt.slice(0, 10);
  
  return (
    <>
      <div className={styles.HistoryItem}>
        <div className={styles.ScrapTop}>
          <TruncateTextTitle text={title} maxLength={15} />

          {isScrapped === "NO" || isScrapped === "No" ? (
            <img src={Star} alt="텅 빈 별" />
          ) : (
            <img src={FillStar} alt="꽉 찬 별" />
          )}
        </div>
        <p className={styles.Content}>
          <TruncateTextContent text={content} maxLength={25} />
        </p>
        <span className={styles.Language}>{fav_language}</span>
        <span className={styles.date}>{"   "+slicedString}</span>
      </div>
    </>
  );
};

export default HistoryItem;
