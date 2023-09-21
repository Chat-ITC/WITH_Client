import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import SelectModal from "../../Modal/SelectModal/SelectModal";
import LangModal from "../../Modal/LangModal/LangModal";
import SubModal from "../../Modal/Subject/Subject";

import styles from "./SummaryPage.module.css";
import Back from "../../assets/AddInfoIcons/back.png";
import Copy from "../../assets/AddInfoIcons/Copy.png";
import Becareful from "../../assets/AddInfoIcons/Becareful.png";
import Star from "../../assets/icons/clip.png";
import FillStar from "../../assets/AddInfoIcons/FillStar.png";

const SummaryPage = () => {
  axios.defaults.withCredentials = true;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const closeModal = () => setIsModalOpen(false);
  const openModal1 = () => setIsModalOpen1(true);
  const closeModal1 = (lanPara) => {
    setLanguage(lanPara);
    setIsModalOpen1(false);
  };
  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = (quePara) => {
    setQuestion(sum(quePara));
    setPrintQuestion(quePara);
    setIsModalOpen2(false);
  };

  const sum = (quePara) => {
    switch (quePara) {
      case "상관없음":
        return "상관없음";
      case "내용요약":
        return "요약해줘";
      case "쉬운설명":
        return "쉽게 설명해줘";
      case "코드 분석":
        return "코드 분석해줘";
      case "내용요약 및 예시코드":
        return "요약 및 예시코드 만들어줘";
      case "쉬운설명과 예시코드":
        return "쉽게 설명해주고 예시코드 만들어줘";
      default:
        return "알 수 없는 옵션입니다.";
    }
  };

  const [printQuestion, setPrintQuestion] = useState("상관없음");
  const [question, setQuestion] = useState("상관없음");
  const [language, setLanguage] = useState("없음");
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [scrapId, setScrapId] = useState(null);
  const [scrapCheck, setScrapCheck] = useState(0);
  const [isScrappedChange, setIsScrappedChange] = useState("NO");
  const [lastLocation, setLastLocation] = useState(null);

  const sendDataHandle = async () => {
    closeModal();
    const formData = new FormData();
    formData.append("imageFile", file);
    formData.append("question", question);
    formData.append("fav_language", language);

    const accessToken = localStorage.getItem("accessToken");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/ai/summary`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${accessToken}`,
          },
          timeout: 60000,
        }
      );
      setData(response.data);
      setCodeBlock(extractCodeBlock(response.data.content));
      setScrapId(response.data.id);
    } catch (error) {
      console.log("요청실패", error);
    }
  };

  const location = useLocation();
  useEffect(() => {
    setFile(location.state.file);
    setLastLocation(location.state.location);
    setIsModalOpen(true);
  }, [location.state.file]);

  function extractCodeBlock(content) {
    const codeBlock = content.match(/```([\s\S]*?)```/);
    return codeBlock ? codeBlock[0] : null;
  }

  const [codeBlock, setCodeBlock] = useState(null);

  const codeBlockStyle = {
    backgroundColor: "#000000",
    padding: "10px",
    borderRadius: "4px",
    overflow: "auto",
  };

  const contentStyle = {
    color: "white",
    letterSpacing: "20px",
  };

  const preWrap = {
    whiteSpace: "pre-wrap",
  };

  const scrapHandle = () => {
    const formDataId = new FormData();
    formDataId.append("id", scrapId);

    try {
      axios.post(
        `${process.env.REACT_APP_SERVER_URL}/ai/summary/like`,
        formDataId,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setScrapCheck(scrapCheck + 1);
      if (scrapCheck % 2 === 0) {
        alert("스크랩 완료");
        setIsScrappedChange("YES");
      } else {
        alert("스크랩 제거");
        setIsScrappedChange("NO");
      }
    } catch (error) {
      console.log("요청실패", error);
    }
  };

  const copyHandle = () => {
    navigator.clipboard
      .writeText(codeBlock)
      .then(() => {
        alert("클립보드에 복사되었습니다.");
      })
      .catch((error) => {
        console.error("클립보드 복사 실패:", error);
      });
  };

  return (
    <>
      <header className={styles.SumTitle}>
        <div className={styles.SumLeft}>
          <div>
            <Link type="button" to={lastLocation}>
              <img src={Back} alt="뒤로가기" />
            </Link>
          </div>
        </div>
        <div className={styles.SumRight}>
          <div className={styles.S}>
            <button type="button" onClick={copyHandle}>
              <img className={styles.RightImg} src={Copy} alt="복사" />
            </button>
            <button type="button" onClick={scrapHandle}>
              {isScrappedChange === "NO" || isScrappedChange === "No" ? (
                <img className={styles.RightImg} src={Star} alt="텅 빈 별" />
              ) : (
                <img
                  className={styles.RightImg}
                  src={FillStar}
                  alt="꽉 찬 별"
                />
              )}
            </button>
          </div>
        </div>
      </header>
      <article className={styles.article}>
        <SelectModal isOpen={isModalOpen} closeModal={closeModal}>
          <div className={styles.HomeMainModal}>
            <div className={styles.SelectPart}>
              <strong className={styles.SelectLang}>학습언어</strong>
              <button
                className={styles.SelectLanguage}
                type="button"
                onClick={openModal1}
              >
                {language}
              </button>
            </div>
            <div className={styles.SelectPart}>
              <span className={styles.SelectSubj}>
                <strong className={styles.SelectSub}>주제</strong>
              </span>
              <button
                className={styles.SelectSubject}
                type="button"
                onClick={openModal2}
              >
                {printQuestion}
              </button>
            </div>
            <div className={styles.SelectBottom}>
              <button
                className={styles.SelectBtn}
                type="button"
                onClick={sendDataHandle}
              >
                확인
              </button>
              <Link to="/HomePage" className={styles.SelectBtn}>
                취소
              </Link>
            </div>
          </div>
          <div
            className={styles.HomePage_Sub}
            style={{ display: isModalOpen2 ? "block" : "none" }}
          >
            <SubModal isOpen={isModalOpen2} onClose={closeModal2} />
          </div>
        </SelectModal>
        {data ? (
          <div style={preWrap}>
            <p>
              {data.content.split(codeBlock).map((text, index) => (
                <React.Fragment key={index}>
                  {text}
                  {index < data.content.split(codeBlock).length - 1 && (
                    <div>
                      <pre style={codeBlockStyle}>
                        <code style={contentStyle}>
                          {codeBlock.replace(/```|```/g, "")}
                        </code>
                      </pre>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </p>
          </div>
        ) : (
          ""
        )}
      </article>
      <footer>
        <div className={styles.articleDesc}>
          <img className={styles.articleImg} src={Becareful} alt="주의" />
          <span>내용이 정확하지 않을 수 있습니다</span>
        </div>
      </footer>
      <div
        className={styles.HomePage_Lang}
        style={{ display: isModalOpen1 ? "block" : "none" }}
      >
        <LangModal isOpen={isModalOpen1} onClose={closeModal1} />
      </div>
    </>
  );
};

export default SummaryPage;
