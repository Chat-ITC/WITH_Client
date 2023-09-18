import styles from "./scrab.module.css";

function Scrab({ isOpen, children, closeModal }) {
  return (
    <div
      className={styles.ModalScrab}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <button type="button" onClick={"block"}>
        스크랩
      </button>
      <div>{children}</div>
    </div>
  );
}

export default Scrab;
