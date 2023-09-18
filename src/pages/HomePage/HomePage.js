import styles from "./HomePage.module.css";

import Logo from "../../assets/logo/CoFe_logo.png";
import Bottom from "../../component/Bottom/Bottom";
import Camera from "../../assets/etc/addimage.png";

import { Fragment } from "react";
import { useState } from "react";
import LangModal from "../../Modal/HomePage_Modal/LangModal";
const HomePage = () => {
  const [isModalOpen, sestIsModalOpen] = useState(false);

  const openModal = () => sestIsModalOpen(true);
  const closeModal = () => sestIsModalOpen(false);

  const handleButtonClick = () => {
    const fileInput = document.getElementById("camera");
    if (fileInput) {
      fileInput.click();
    }
  };
  return (
    <>
      <header className={styles.main}>
        <img className={styles.main_img} src={Logo} alt="내 옆에 코딩친구" />
        <h1 className={styles.main_title}>
          내 옆에 <br /> 코딩친구
        </h1>
      </header>
      <div className={styles.camera}>
        <button className={styles.Camera_Btn} onClick={handleButtonClick}>
          <img
            className={styles.camera_img}
            src={Camera}
            alt="사진 첨부 버튼"
          />
          <span>사진을 찍어보세요</span>
        </button>
      </div>
      <input
        type="file"
        id="camera"
        name="camera"
        capture="camera"
        accept="image/*"
        style={{ display: "none" }}
      />
      {/*<button onClick={() => setModalOpen(true)}>모달창 열기</button>*/}
      {/*<LangModal isOpen={modalOpen} onClose={handleCloseModal}>
        <h2 className={styles.LangTitle}>학습 언어</h2>
        <span className={styles.LangDesc}>
          요약을 원하는 언어를 선택해 주세요
        </span>
  </LangModal>*/}
      <Bottom />
    </>
  );
};

export default HomePage;
