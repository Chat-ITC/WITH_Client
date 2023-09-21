//css
import styles from "./Quiz_Com.module.css";

const QuizItem = ({ title, content, fav_language, id, answer, caeateAt }) => {
  //   if (isScrapped === "No" || isScrapped === "No") {
  //     return null;
  //   }
  return (
    <>
      <div className={styles.QuizBox}>
        <div className={styles.Wall}>
          <h1 className={styles.Title}>C++ 다중 상속</h1>
          <p className={styles.Desc}>
            {" "}
            C++은 한 클래스가 여러 개의 기본 클래스를 동시에 상속할 수 있도록
            허용합니다. (참/거짓)"
          </p>
        </div>
        <button className={styles.btn} type="button">
          정답
          <br />
          확인
        </button>
      </div>
    </>
  );
};

export default QuizItem;
