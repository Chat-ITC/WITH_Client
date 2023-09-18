import Scrab from "./scrab.module.css";
function ScrabModal({ isOpen, children, closeModal }) {
  return (
    <div
      className={Scrab.HomeScrab}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div>{children}</div>
    </div>
  );
}

export default ScrabModal;
