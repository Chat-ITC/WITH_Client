import styles from "./Home.module.css";
import React, { useRef } from "react";

import SendBtn from "../../assets/etc/addimage.png";

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
      <div className={styles.Home_header}>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <button className={styles.SendBtn} onClick={handleButtonClick}>
          <img className={styles.Btn} src={SendBtn} alt="사진 첨부 버튼" />
          <span>사진을 찍어보세요</span>
        </button>
      </div>
    </>
  );
};

export default Home;
