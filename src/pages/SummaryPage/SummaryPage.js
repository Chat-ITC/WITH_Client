import styles from "./SummaryPage.module.css";
import Back from "../../assets/AddInfoIcons/back.png";
import Scrab from "../../assets/icons/clip.png";
import Copy from "../../assets/AddInfoIcons/Copy.png";
import Careful from "";
const SummaryPage = () => {
  return (
    <>
      <header className={styles.SumHeader}>
        <div className={styles.SumTitle}>
          <div>
            <img src={Back} alt="뒤로가기" />
          </div>
          <span className={styles.selectLang}>C언어</span>
          <div>
            <img src="" alt="" />
            <span className=""></span>
          </div>
        </div>
      </header>
    </>
  );
};
export default SummaryPage;
