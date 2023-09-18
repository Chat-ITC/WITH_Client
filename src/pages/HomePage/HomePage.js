import styles from "./HomePage.module.css";

import Logo from "../../assets/logo/CoFe_logo.png";
import Bottom from "../../component/Bottom/Bottom";
import Camera from "../../assets/etc/addimage.png";

import React, { useState } from "react";
import LangModal from "../../Modal/HomePage_Modal/LangModal";
import style from "../../Modal/HomePage_Modal/LangModal.module.css";
const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

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
      <button onClick={() => setModalOpen(true)}>모달창 열기</button>
      <LangModal isOpen={modalOpen} onClose={handleCloseModal} />
      <Bottom />
    </>
  );
};

export default HomePage;
