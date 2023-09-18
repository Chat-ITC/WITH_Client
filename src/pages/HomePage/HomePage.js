//css
import styles from "./HomePage.module.css";
//png
import Logo from "../../assets/logo/CoFe_logo.png";
import Camera from "../../assets/etc/addimage.png";
import Becareful from "../../assets/AddInfoIcons/Becareful.png";
//component
import Bottom from "../../component/Bottom/Bottom";
//modal
import SelectModal from "../../Modal/SelectModal/SelectModal";
import LangModal from "../../Modal/LangModal/LangModal";
import Scrab from "../../Modal/Scrab/scrab";
import SubModal from "../../Modal/Subject/Subject";
//library
import { useState } from "react";

const HomePage = () => {
  const [isModalOpen, sestIsModalOpen] = useState(false);

  const openModal = () => sestIsModalOpen(true);
  const closeModal = () => sestIsModalOpen(false);

  //학습 언어
  const [isModalOpen1, sestIsModalOpen1] = useState(false);
  const openModal1 = () => sestIsModalOpen1(true);
  const closeModal1 = () => sestIsModalOpen1(false);

  //주제
  const [isModalOpen2, sestIsModalOpen2] = useState(false);
  const openModal2 = () => sestIsModalOpen2(true);
  const closeModal2 = () => sestIsModalOpen2(false);

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
      <div className={styles.camera_border}>
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
      </div>

      <div>
        <Scrab></Scrab>
      </div>

      <div className={styles.HomeMainModal}>
        <button type="button" onClick={openModal}>
          open
        </button>
        <SelectModal isOpen={isModalOpen} closeModal={closeModal}>
          <div className={styles.SelectUp}>
            <em className={styles.SelectLang}>학습언어</em>
            <button
              className={styles.SelectLanguage}
              type="button"
              onClick={openModal1}
            >
              C언어
            </button>
          </div>
          <div className={styles.SelectDown}>
            <span className={styles.SelectSubj}>
              <em className={styles.SelectSub}>주제</em>
              <img src={Becareful} alt="경고" />
            </span>
            <button className={styles.SelectSubject} type="button">
              선택없음
            </button>
          </div>
          <div className={styles.SelectBottom}>
            <button
              className={styles.SelectBtn}
              type="button"
              onClick={openModal}
            >
              확인
            </button>
            <button
              onClick={closeModal}
              className={styles.SelectBtn}
              type="button"
            >
              취소
            </button>
          </div>
        </SelectModal>
      </div>

      <div
        className={`${styles.HomePage_Lang} ${
          isModalOpen1 ? styles.modal_open : ""
        }`}
        style={{ display: isModalOpen1 ? "block" : "none" }}
      >
        <LangModal isOpen={isModalOpen1} onClose={closeModal1}></LangModal>
      </div>
      <Bottom />
      {/*주제 모달*/}
      <div
        className={`${styles.HomePage_Sub} ${
          isModalOpen2 ? styles.modal_open : ""
        }`}
      >
        <SubModal isOpen={isModalOpen2} onClose={closeModal2}></SubModal>
      </div>
    </>
  );
};

export default HomePage;
