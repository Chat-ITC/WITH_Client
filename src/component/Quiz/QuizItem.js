//css
import styles from "./QuizItem.module.css";
import right from "../../assets/AddInfoIcons/right.png"


const QuizItem = ({
  title,
  content,
  anwer,
}) => {
  return (
    <>
      <div className={styles.QuizBox}>
        <div className={styles.Wall}>
          <h1 className={styles.Title}>{title}</h1>
          <p className={styles.Desc}>
            {content}
          </p>
        </div>
        <img src = {{right}} alt="오른쪽 화살표"> 
        </img>
      </div>
    </>
  );
};

export default QuizItem;
