import { ModalOverlay, ModalContainer } from "./style";

const Modal = ({ children, isOpened }) => {
  if (!isOpened) return null;

  return (
    <ModalOverlay>
      <ModalContainer>{children}</ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
