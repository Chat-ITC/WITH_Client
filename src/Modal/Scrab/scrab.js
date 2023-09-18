//html이나 다른 컴포넌트 등을 렌더링할 수 있게 자유도를 더 높이려면 children을 사용할 수도 있다.
import styles from "./scrab.module.css";
function Scrab({ isOpen, children, closeModal }) {
  return (
    //display가 열렸으면 block속성으로 열리고 닫혔으면 none 속성으로 닫힌다.
    <div
      className={styles.HomeScrab}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div>{children}</div>
    </div>
  );
}
//isOpen이 True이면 display의 값은 "block"이 되어 사용자의 화면에 모달창이 나타나고 isOpen이 false이면 사라진다.
//content props와 childre을 사용하는 컴포넌트는 부모 컴포넌트에서 각각 다른 사용법 차이가 있다.
export default Scrab;
