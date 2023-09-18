import { useEffect, useState } from "react";
import styles from "./ScrapItem.module.css";

const ScrapItem = () => {
  const [scrapData, setScrapData] = useState(null);

  useEffect(() => {
    // 백엔드 API 호출
    fetch("백엔드 API 주소")
      .then((response) => response.json())
      .then((data) => setScrapData(data))
      .catch((error) => console.error(error));
  }, []);

  if (!scrapData) {
    return <div>Loading...</div>;
  }

  const { title, content, timestamp } = scrapData;

  return (
    <div className={styles.ScrapItem}>
      <h2 className={styles.Title}>{styles.title}</h2>
      <p className={styles.Content}>{styles.content}</p>
      <p className={styles.Timestamp}>올린 시간: {styles.timestamp}</p>
    </div>
  );
};

export default ScrapItem;
