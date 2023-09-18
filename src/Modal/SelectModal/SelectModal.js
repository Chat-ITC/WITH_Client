function Modal({ isOpen, children, closeModal }) {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <div>{children}</div>
    </div>
  );
}
export default Modal;
