import styles from "./Home.module.css";
import React, { useRef } from "react";

import SendBtn from "../../assets/etc/addimage.png";
import Logo from "../../assets/logo/CoFe_logo.png";

import Bottom from "../../component/Bottom/Bottom";
import Form from "../../component/Description/Description";

const Home = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // 선택한 파일에 대한 처리 로직 추가
    console.log("Selected file:", selectedFile);
  };

  return (
    <>
      <header className={styles.main}>
        <img className={styles.main_img} src={Logo} alt="내 옆에 코딩친구" />
        <h1 className={styles.main_title}>
          내 옆에 <br /> 코딩친구
        </h1>
      </header>
      <div className={styles.Home_header} onClick={handleButtonClick}>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <button className={styles.SendBtn}>
          <img className={styles.Btn} src={SendBtn} alt="사진 첨부 버튼" />
          <span>사진을 찍어보세요</span>
        </button>
        <hr className={styles.hr_line} />
      </div>
      <span className={styles.scrab}>스크랩</span>
      <Modal />
      <div className={styles.descForm}></div>
      <div className={styles.descForm}></div>
      <div className={styles.descForm}></div>
      <Bottom />
    </>
  );
};

function Modal() {
  return (
    <div className={styles.HomeModal}>
      <button className={styles.modalBtn} type="button">
        <p className={styles.modalDesc}>스크랩</p>
      </button>
      <button className={styles.modalBtn} type="button">
        <p className={styles.modalDesc}>최근 본 내역</p>
      </button>
    </div>
  );
}

export default Home;
