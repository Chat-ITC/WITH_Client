import styles from "./HomePage.module.css";
import { Fragment } from "react";
import { useState } from "react";
import Modal from "../../Modal/Modal";

import Logo from "../../assets/logo/CoFe_logo.png";
import Bottom from "../../component/Bottom/Bottom";
import Camera from "../../assets/etc/addimage.png";
const HomePage = () => {
  const [isModalOpen, sestIsModalOpen] = useState(false);

  const openModal = () => sestIsModalOpen(true);
  const closeModal = () => sestIsModalOpen(false);
  return (
    <>
      <header className={styles.main}>
        <img className={styles.main_img} src={Logo} alt="내 옆에 코딩친구" />
        <h1 className={styles.main_title}>
          내 옆에 <br /> 코딩친구
        </h1>
      </header>
      <div className={styles.camera}>
        <button className={styles.Camera_Btn} onClick={openModal}>
          <img
            className={styles.camera_img}
            src={Camera}
            alt="사진 첨부 버튼"
          />
          <span>사진을 찍어보세요</span>
        </button>
      </div>
      <Modal
        className={styles.camera_content}
        isOpen={isModalOpen}
        closeModal={closeModal}
      >
        <button
          className={styles.camera_content_Btn}
          type="button"
          onClick={closeModal}
        >
          사진찍기
        </button>
        <button
          className={styles.camera_content_Btn}
          type="button"
          onClick={closeModal}
        >
          사진 보관함
        </button>
        <button
          className={styles.camera_content_Btn}
          type="button"
          onClick={closeModal}
        >
          첨부파일
        </button>
      </Modal>
      <Bottom />
    </>
  );
};

export default HomePage;
