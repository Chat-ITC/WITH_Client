import styles from "./SummaryPage.module.css";
import Back from "../../assets/AddInfoIcons/back.png";
import Scrab from "../../assets/icons/clip.png";
import Copy from "../../assets/AddInfoIcons/Copy.png";
import Careful from "../../assets/AddInfoIcons/Becareful.png";

import Bottom from "../../component/Bottom/Bottom";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

const SummaryPage = () => {
  const [file, setFile] = useState(null);

  const location = useLocation();
  setFile(location.state.file);
  console.log('선택한 파일(써머리페이지):', file);




  return (
    <>
      <header className={styles.SumTitle}>
        <div className={styles.SumLeft}>
          <div>
            <button type="button">
              <img src={Back} alt="뒤로가기" />
            </button>
          </div>
          <span className={styles.selectLang}>C언어</span>
        </div>
        <div className={styles.SumRight}>
          <div>
            <button type="button">
              <img src={Scrab} alt="스크랩" />
            </button>
          </div>
          <span className={styles.scrab}>스크랩하기</span>
        </div>
      </header>
      <article className={styles.article}>
        <button type="button">
          <img className={styles.Copy} src={Copy} alt="복사" />
        </button>
      </article>
      <article className={styles.article}>
        <button type="button">
          <img className={styles.Copy} src={Copy} alt="복사" />
        </button>
      </article>
      <footer>
        <div className={styles.articleDesc}>
          <img className={styles.articleImg} src={Careful} alt="주의" />
          <span>내용이 정확하지 않을 수 있습니다</span>
        </div>
        <div className={styles.articleBtn}>
          <button className={styles.Button} type="button">
            새로운 사진 촬영
          </button>
        </div>
      </footer>
      <Bottom />
    </>
  );
};
export default SummaryPage;
