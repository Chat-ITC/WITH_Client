//css
import styles from "./HomePage.module.css";
//png
import Logo from "../../assets/logo/CoFe_logo.png";
import Camera from "../../assets/etc/addimage.png";
import Becareful from "../../assets/AddInfoIcons/Becareful.png";
//component
import Bottom from "../../component/Bottom/Bottom";
import ScrapItem from "../../component/ScrapItem/ScrapItem";
//modal
import SelectModal from "../../Modal/SelectModal/SelectModal";
import LangModal from "../../Modal/LangModal/LangModal";
import Scrab from "../../Modal/Scrab/scrab";
import SubModal from "../../Modal/Subject/Subject";
import ScrabBtn from "../../Modal/Scrab/scrab";
//library
import { useEffect, useState } from "react";
import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

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

  //스크랩
  const [isModalOpen3, sestIsModalOpen3] = useState(false);
  const openModal3 = () => sestIsModalOpen3(true);
  const closeModal3 = () => sestIsModalOpen3(false);

  //ScrapItem
  const [scraps, setScraps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("백엔드 API 주소");
        setScraps(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // 초기 데이터 가져오기
    fetchData();

    // 일정 간격으로 데이터 업데이트
    const intervalId = setInterval(fetchData, 5000); // 5초마다 호출

    return () => {
      clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 제거
    };
  }, []);

  //카메라
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      console.log("선택한 파일(홈페이지):", file);
      setSelectedPhoto(file);
      navigate("/SummaryPage", { state: { file: file } });
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
          <input
            type="file"
            accept="image/*;capture=camera"
            style={{ display: "none" }} // 요소를 화면에 표시하지 않음
            ref={fileInputRef} // ref를 사용하여 요소 참조
            onChange={handleFileChange} // 파일 선택 시 이벤트 핸들러 호출
          />
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
      <hr className={styles.Homehr} />

      <div
        className={`${styles.Scrab} ${isModalOpen3 ? styles.modal_open : ""}`}
        style={{ display: isModalOpen3 ? "block" : "none" }}
      >
        {isModalOpen3 ? (
          <Scrab isOpen={isModalOpen3} onClose={closeModal3} />
        ) : (
          <button type="button" onClick={openModal3}>
            스크랩
          </button>
        )}
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
            <button
              className={styles.SelectSubject}
              type="button"
              onClick={openModal2}
            >
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
        style={{ display: isModalOpen2 ? "block" : "none" }}
      >
        <SubModal isOpen={isModalOpen2} onClose={closeModal2}></SubModal>
      </div>
    </>
  );
};

export default HomePage;
