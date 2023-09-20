//css
import styles from "./HomePage.module.css";
//png
import Logo from "../../assets/logo/CoFe_logo.png";
import Camera from "../../assets/etc/addimage.png";
//component
import ScrapItem from "../../component/ScrapItem/ScrapItem";
import Bottom from "../../component/Bottom/Bottom";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  //history
  const [historyData, setHistoryData] = useState([]);

  axios.defaults.withCredentials = true;

  const historyReq = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    } else {
      axios.defaults.headers.common["Authorization"] = null;
    }

    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/ai/summary/home`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  };

  useEffect(() => {
    // historyReq 함수를 호출하고 데이터를 받아옵니다.
    historyReq()
      .then((response) => {
        //map으로 배열 자체 넘기기
        console.log(response);
        console.log(response.data);
        console.log(response.data[0]);
        console.log(response.data[0].title);
        setHistoryData(response.data);
      })
      .catch((error) => {
        const statusCode = error.response.status;

        if (statusCode === 401) {
          // 400 상태 코드 처리
          alert("로그인 해주세요");
          navigate("/");
        } else if (statusCode === 409) {
          alert("세션이 만료되었습니다. 다시 로그인해 주세요");
          navigate("/");
        }
      });
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

  const handleIdCheck = (contentProp, isScrappedProp, idProp) => {
    console.log(contentProp);
    console.log(isScrappedProp);
    console.log(idProp);
    navigate("/listClickSummary",
      {
        state: {
          content: contentProp,
          isScrapped: isScrappedProp,
          id: idProp
        }
      });
  };



  return (
    <>
      <div className={styles.MainTop}>
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
      </div>
      <button
        className={styles.section_icons}
        type="button"
        onClick={openModal}
      >
        스크랩
      </button>
      <Scrap
        isOpen={isModalOpen}
        closeModal={closeModal}
        className={styles.BtnScrap}
      />

      <div className={styles.historyList}>
        <ul>
          {Array.isArray(historyData) &&
            historyData.map((dataList, index) => (
              <li key={index} onClick={() => handleIdCheck(dataList.content, dataList.isScrapped, dataList.id)}>
                <ScrapItem
                  key={index}
                  title={dataList.title} // 수정된 부분
                  content={dataList.content}
                  createAt={dataList.createAt}
                  fav_language={dataList.fav_language}
                  id={dataList.id}
                  isScrapped={dataList.isScrapped}
                />
              </li>
            ))}
        </ul>
      </div>

      <Bottom />
    </>
  );
};

export default HomePage;
