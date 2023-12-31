//css
import styles from "./HomePage.module.css";
//png
import Logo from "../../assets/loginButtons/Logo.png";
import Camera from "../../assets/etc/addimage.png";
import Down from "../../assets/icons/Down.png";
//component
import HistoryItem from "../../component/HistoryItem/HistoryItem";
import Bottom from "../../component/Bottom/Bottom";

//modal
import Scrap from "../../Modal/Scrab/scrab";
import ScrapItem from "../../component/ScrapItem/ScrapItem";
//library
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [logoLoca, setLogoLoca] = useState("home");
  console.log(logoLoca);
  const navigate = useNavigate();
  const modalRef = useRef(null);

  //스크랩
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  //history
  const [historyData, setHistoryData] = useState([]);
  const locate = "/HomePage";

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
    setLogoLoca("home");
    // historyReq 함수를 호출하고 데이터를 받아옵니다.
    historyReq()
      .then((response) => {
        //map으로 배열 자체 넘기기
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data[0]);
        // console.log(response.data[0].title);

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
  const location = useLocation();
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      console.log("선택한 파일(홈페이지):", file);
      setSelectedPhoto(file);
      navigate("/SummaryPage", { state: { file: file, location: location } });
    }
  };

  const handleIdCheck = (contentProp, isScrappedProp, idProp) => {
    console.log(contentProp);
    console.log(isScrappedProp);
    console.log(idProp);
    navigate("/ListClickSummary", {
      state: {
        content: contentProp,
        isScrapped: isScrappedProp,
        id: idProp,
        locate: locate,
      },
    });
  };

  const [historyORScrap, setHistoryORScrap] = useState("history");

  const historyClickHandle = () => {
    setHistoryORScrap("history");
    historyReq()
      .then((response) => {
        setHistoryData(response.data);
      })
      .catch((error) => {
        const statusCode = error.response.status;

        if (statusCode === 401) {
          alert("로그인 해주세요");
          navigate("/");
        } else if (statusCode === 409) {
          alert("세션이 만료되었습니다. 다시 로그인해 주세요");
          navigate("/");
        }
      });
  };

  const scrapClickHandle = () => {
    setHistoryORScrap("scrap");
    historyReq()
      .then((response) => {
        setHistoryData(response.data);
      })
      .catch((error) => {
        const statusCode = error.response.status;

        if (statusCode === 401) {
          alert("로그인 해주세요");
          navigate("/");
        } else if (statusCode === 409) {
          alert("세션이 만료되었습니다. 다시 로그인해 주세요");
          navigate("/");
        }
      });
  };

  return (
    <>
      <div className={styles.MainTop}>
        <header className={styles.main}>
          <img className={styles.main_img} src={Logo} alt="내 옆에 코딩친구" />
        </header>

        <div className={styles.camera_border}>
          <div className={styles.camera}>
            <input
              type="file"
              accept="image/*;
              capture=camera"
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
        <button className={styles.Scrap_button} onClick={openModal}>
          <span>최근 본 내역</span>
          <img className={styles.DownImg} src={Down} alt="아래 방향" />
        </button>
        <div
          className={`${styles.Scrap_button} ${
            isModalOpen ? styles.modal_open : ""
          }`}
          style={{ display: isModalOpen ? "block" : "none" }}
          ref={modalRef}
        >
          <Scrap
            className={styles.ScrapText}
            isOpen={isModalOpen}
            close={closeModal}
          >
            <button
              className={styles.BtnText}
              onClick={() => {
                closeModal();
                scrapClickHandle();
                document.querySelector(`.${styles.Scrap_button}`).innerText =
                  document.querySelector(`.${styles.BtnText}`).innerText;
              }}
            >
              <span className={styles.Down1}>스크랩</span>
            </button>

            <button
              className={styles.BtnText}
              onClick={() => {
                closeModal();
                historyClickHandle();
                document.querySelector(`.${styles.Scrap_button}`).innerText =
                  document.querySelectorAll(`.${styles.BtnText}`)[1].innerText;
              }}
            >
              <span className={styles.Down1}>최근 본 내역</span>
            </button>
          </Scrap>
        </div>
      </div>
      <div className={styles.emptyPart}></div>

      <div className={styles.historyList}>
        <ul style={{marginBottom: 65}}>
          {Array.isArray(historyData) &&
            historyData.map((dataList, index) => (
              <li
                key={index}
                onClick={() =>
                  handleIdCheck(
                    dataList.content,
                    dataList.isScrapped,
                    dataList.id
                  )
                }
              >
                {historyORScrap === "history" ? (
                  <HistoryItem // 여기에 똑같은 ScrapItem 추가하고 클릭 이벤트 바꾸면 될듯
                    key={index}
                    title={dataList.title} // 수정된 부분
                    content={dataList.content}
                    createAt={dataList.createAt}
                    fav_language={dataList.fav_language}
                    id={dataList.id}
                    isScrapped={dataList.isScrapped}
                  />
                ) : (
                  <ScrapItem // 여기에 똑같은 ScrapItem 추가하고 클릭 이벤트 바꾸면 될듯
                    key={index}
                    title={dataList.title} // 수정된 부분
                    content={dataList.content}
                    createAt={dataList.createAt}
                    fav_language={dataList.fav_language}
                    id={dataList.id}
                    isScrapped={dataList.isScrapped}
                  />
                )}
              </li>
            ))}
        </ul>
      </div>
      <Bottom logo={logoLoca} />
    </>
  );
};

export default HomePage;
