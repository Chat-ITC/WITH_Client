import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ScrapItem.module.css";

const ScrapItem = () => {
  // const [scrapData, setScrapData] = useState(null);

  // //useEffect 훅을 사용하여 컴포넌트가 마운트 되었을 때 백엔드 API를 호출하는 로직
  // useEffect(() => {
  //   // 백엔드 API 호출
  //   axios
  //     .get("백엔드 API 주소")
  //     .then((response) => setScrapData(response.data))
  //     .catch((error) => console.error(error));
  // }, []);

  // if (!scrapData) {
  //   return <div>Loading...</div>;
  // }

  // const { title, content, Language } = scrapData;

  // const handleClick = () => {
  //   // 다음 창으로 넘어가는 동작 수행
  //   window.location.href = "다음 창 주소";
  // };
  {
    /*onClick={handleClick}*/
  }
  return (
    <>
      <div className={styles.ScrapItem}>
        {/*<h2 className={styles.Title}>{title}</h2>
      <p className={styles.Content}>{content}</p>
  <p className={styles.Language}>{Language}</p>*/}
        <h2 className={styles.Title}>제목입니다.</h2>
        <p className={styles.Content}>
          일이삼사오육칠팔구십일이삼사오육칠팔구십.
        </p>
        <span className={styles.Language}>선호하는 언어입니다.</span>
      </div>

      <div className={styles.ScrapItem}>
        {/*<h2 className={styles.Title}>{title}</h2>
      <p className={styles.Content}>{content}</p>
  <p className={styles.Language}>{Language}</p>*/}
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
