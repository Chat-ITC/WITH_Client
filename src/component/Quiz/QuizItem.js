//css
import styles from "./QuizItem.module.css";



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
        
      </div>
    </>
  );
};

export default QuizItem;
