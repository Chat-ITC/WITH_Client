import styles from "./SummaryPage.module.css";
import Back from "../../assets/AddInfoIcons/back.png";
import Copy from "../../assets/AddInfoIcons/Copy.png";
import Becareful from "../../assets/AddInfoIcons/Becareful.png";

import Star from "../../assets/icons/clip.png";
import FillStar from "../../assets/AddInfoIcons/FillStar.png";

import React from "react";
import axios from "axios";
import Bottom from "../../component/Bottom/Bottom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import DynamicCodeBlock from "../../component/DynamicCodeBlock/DynamicCodeBlock";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//modal
import SelectModal from "../../Modal/SelectModal/SelectModal";
import LangModal from "../../Modal/LangModal/LangModal";
import SubModal from "../../Modal/Subject/Subject";

const SummaryPage = () => {
  axios.defaults.withCredentials = true;

  const [isModalOpen, sestIsModalOpen] = useState(false);
  const openModal = () => sestIsModalOpen(true);
  const closeModal = () => sestIsModalOpen(false);

  //학습 언어
  const [isModalOpen1, sestIsModalOpen1] = useState(false);
  const openModal1 = () => sestIsModalOpen1(true);
  const closeModal1 = (lanPara) => {
    setLanguage(lanPara);
    sestIsModalOpen1(false);
  };

  //전송할 글 설정
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
  //주제
  const [isModalOpen2, sestIsModalOpen2] = useState(false);
  const openModal2 = () => sestIsModalOpen2(true);
  const closeModal2 = (quePara) => {
    setQuestion(sum(quePara));
    setPrintQuestion(quePara);
    console.log(quePara);
    console.log(question);
    console.log(printQuestion);
    sestIsModalOpen2(false);
  };

  //주제와 언어
  const [printQuestion, setPrintQuestion] = useState("상관없음");
  const [question, setQuestion] = useState("상관없음");
  const [language, setLanguage] = useState("없음");
  const [file, setFile] = useState(null);

  //내용과 코드
  const [data, setData] = useState(null);

  const [scrapId, setScrapId] = useState(null);
  const [scrapCheck, setScrapCheck] = useState(0);
  const [isScrappedChange, setIsScrappedChange] = useState("NO");

  //위치 저장
  const [lastLocation, setLastLocation] = useState(null);

  const sendDataHandle = async () => {
    console.log(question);
    console.log(language);
    closeModal();
    const formData = new FormData();

    formData.append("imageFile", file);
    formData.append("question", question);
    formData.append("fav_language", language);
    console.log("file: ", file);
    console.log("question: ", question);
    console.log("language: ", language);

    const accessToken = localStorage.getItem("accessToken");
    console.log("토큰 확인: ", accessToken);

    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/ai/summary`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        timeout: 60000,
      })
      .then((response) => {
        console.log("요청성공");
        console.log(response.data);
        setData(response.data);
        setCodeBlock(extractCodeBlock(response.data.content));
        console.log("같은지 비교하기. ", response.data.content);
        setScrapId(response.data.id);
      })
      .catch((error) => {
        console.log("요청실패");
        console.log(error);
      });
  };

  const location = useLocation();
  useEffect(() => {
    setFile(location.state.file);
    setLastLocation(location.state.location);
    openModal();
  }, [location.state.file]);

  //코드 블럭 추출 로직
  function extractCodeBlock(content) {
    // 정규식을 사용하여 코드 블록을 추출합니다.
    const codeBlock = content.match(/```([\s\S]*?)```/);

    return codeBlock ? codeBlock[0] : null;
  }

  const [codeBlock, setCodeBlock] = useState(null);

  //코드 블럭 스타일
  const codeBlockStyle = {
    backgroundColor: "#000000", // 배경색 변경
    padding: "10px",
    borderRadius: "4px", // 모서리 둥글게 만들기
    overflow: "auto",
  };

  const contentStyle = {
    color: "white", // 글자 색 변경
    letterspacing: "20px",
  };

  const preWrap = {
    whiteSpace: "pre-wrap", // 공백 문자와 줄 바꿈 보존
  };

  //스크랩버튼
  const scrapHandle = () => {
    console.log("버튼이 클릭되었습니다!");

    const formDataId = new FormData();
    formDataId.append("id", scrapId);
    console.log("scrapId: ", scrapId);

    try {
      const response = axios.post(
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
      console.log("응답 성공:", response);
      setScrapCheck(scrapCheck + 1);
      console.log(scrapCheck);
      if (scrapCheck % 2 === 0) {
        alert("스크랩 완료");
        setIsScrappedChange("YES");
      } else {
        alert("스크랩 제거");
        setIsScrappedChange("NO");
      }
    } catch (error) {
      console.log(error);
      console.log("요청실패");
    }
  };

  //복사버튼
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
              {/* 모달1가 열림*/}
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
              {/* 모달2가 열림*/}
              <button
                className={styles.SelectSubject}
                type="button"
                onClick={openModal2}
              >
                {printQuestion}
              </button>
            </div>
            <div className={styles.SelectBottom}>
              {/* 데이터 전송 버튼 */}
              <button
                className={styles.SelectBtn}
                type="button"
                onClick={sendDataHandle}
              >
                확인
              </button>
              {/* SelectModal창 닫기 버튼 */}
              <Link to="/HomePage" className={styles.SelectBtn}>
                취소
              </Link>
            </div>
          </div>
          {/*주제 모달*/}
          <div
            className={styles.HomePage_Sub}
            style={{ display: isModalOpen2 ? "block" : "none" }}
          >
            <SubModal isOpen={isModalOpen2} onClose={closeModal2} />
          </div>
          <Bottom />
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
        {/* 학습언어 */}
        <div
          className={styles.HomePage_Lang}
          style={{ display: isModalOpen1 ? "block" : "none" }}
        >
          <LangModal isOpen={isModalOpen1} onClose={closeModal1} />
        </div>
      </article>
      {/* <article className={styles.article}>
        <button type="button">
          <img className={styles.Copy} src={Copy} alt="복사" />
        </button>
      </article> */}
      <footer>
        <div className={styles.articleDesc}>
          <img className={styles.articleImg} src={Becareful} alt="주의" />
          <span>내용이 정확하지 않을 수 있습니다</span>
        </div>
      </footer>
    </>
  );
};
export default SummaryPage;