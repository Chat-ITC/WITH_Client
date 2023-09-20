import { useEffect, useState } from "react";
import axios from "axios";
//png
import FillStar from "../../assets/AddInfoIcons/FillStar.png";
import Star from "../../assets/icons/clip.png";
//css
import styles from "./ScrapItem.module.css";
//component
import ScrapBtn from "../../component/ScrabBtn/ScrabBtn";

function TruncateTextTitle({ text, maxLength }) {
  if (text.length <= maxLength) {
    return <h2 className="Title">{text}</h2>;
  } else {
    const truncatedText = text.substring(0, maxLength) + '...';
    return <span title={text} className="Title">{truncatedText}</span>;
  }
}

function TruncateTextContent({ text, maxLength }) {
  if (text.length <= maxLength) {
    return <h2 className="Content">{text}</h2>;
  } else {
    const truncatedText = text.substring(0, maxLength) + '...';
    return <span Content={text} className="Content">{truncatedText}</span>;
  }
}



const ScrapItem = ({ title, content, createAt, fav_language, id, isScrapped }) => {
  

  return (
    <>
      <div className={styles.ScrapItem}>

        <div className={styles.ScrapTop}>
          <TruncateTextTitle text={title} maxLength={15} />
          <ScrapBtn />
        </div>

        <p className={styles.Content}>       
          <TruncateTextContent text={content} maxLength={25} />
          
        </p>
        
        <span className={styles.Language}>
          {fav_language}
          </span>
      </div>
    </>
  );
};

export default ScrapItem;
