//png
import FillStar from "../../assets/AddInfoIcons/FillStar.png";
import Star from "../../assets/icons/clip.png";
//css
import styles from "./ScrapItem.module.css";
//component
import ScrapBtn from "../ScrabBtn/ScrabBtn";

function TruncateTextTitle({ text, maxLength }) {
  if (text.length <= maxLength) {
    return <h2 className={styles.Title}>{text}</h2>;
  } else {
    const truncatedText = text.substring(0, maxLength) + "...";
    return (
      <h2 title={text} className={styles.Title}>
        {truncatedText}
      </h2>
    );
  }
}

function TruncateTextContent({ text, maxLength }) {
  if (text.length <= maxLength) {
    return <h2 className={styles.Content}>{text}</h2>;
  } else {
    const truncatedText = text.substring(0, maxLength) + "...";
    return (
      <h2 Content={text} className={styles.Content}>
        {truncatedText}
      </h2>
    );
  }
}

const ScrapItem = ({
  title,
  content,
  createAt,
  fav_language,
  id,
  isScrapped,
}) => {
  if (isScrapped === "NO" || isScrapped === "No") {
    return null;
  }

  const slicedString = createAt.slice(0, 10);

  return (
    <>
      <div className={styles.ScrapItem}>
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
        <span className={styles.date}>{"   " + slicedString}</span>
      </div>
    </>
  );
};

export default ScrapItem;
