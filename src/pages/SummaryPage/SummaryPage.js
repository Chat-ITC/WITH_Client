import styles from "./SummaryPage.module.css";
import Back from "../../assets/AddInfoIcons/back.png";
import Scrab from "../../assets/icons/clip.png";
import Copy from "../../assets/AddInfoIcons/Copy.png";
import Careful from "../../assets/AddInfoIcons/Becareful.png";

const SummaryPage = () => {
  return (
    <>
      <header className={styles.SumHeader}>
        <div className={styles.SumTitle}>
          <div className={styles.SumLeft}>
            <div>
              <button type="button">
                <img src={Back} alt="뒤로가기" />
              </button>
            </div>
            <span className={styles.selectLang}>C언어</span>
          </div>
          <div className={styles.SumRight}>
            <button type="button">
              <img src={Scrab} alt="스크랩" />
            </button>
            <span className={styles.scrab}>스크랩하기</span>
          </div>
        </div>
        <article className={styles.article}>
          <button type="button">
            <img src={Copy} alt="복사" />
          </button>
        </article>
        <article className={styles.article}>
          <button type="button">
            <img src={Copy} alt="복사" />
          </button>
        </article>
      </header>
    </>
  );
};
export default SummaryPage;
