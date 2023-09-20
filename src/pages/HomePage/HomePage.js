//css
import styles from "./HomePage.module.css";
//png
import Logo from "../../assets/logo/CoFe_logo.png";
import Camera from "../../assets/etc/addimage.png";
//component
import Bottom from "../../component/Bottom/Bottom";
import ScrapItem from "../../component/ScrapItem/ScrapItem";
//modal
import Scrap from "../../Modal/Scrab/scrab";
//library
import { useEffect, useState } from "react";
import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  //스크랩
  const [isModalOpen, sestIsModalOpen] = useState(false);
  const openModal = () => sestIsModalOpen(true);

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
      <button
        className={styles.section_icons}
        type="button"
        onClick={openModal}
      >
        스크랩
      </button>
      <Scrap
        className={styles.BtnScrap}
        style={{ display: isModalOpen ? "block" : "none" }}
      />

      <Bottom />
    </>
  );
};

export default HomePage;
