import styles from "./ListClickSummary.module.css";
import Back from "../../assets/AddInfoIcons/back.png";
import Star from "../../assets/icons/clip.png";
import FillStar from "../../assets/AddInfoIcons/FillStar.png";
import Copy from "../../assets/AddInfoIcons/Copy.png";
import Becareful from "../../assets/AddInfoIcons/Becareful.png";

import React from "react";
import axios from "axios";
import Bottom from "../../component/Bottom/Bottom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ListClickSummary = () => {
  axios.defaults.withCredentials = true;
  const location = useLocation();
  const { content, isScrapped, id } = location.state;

  //내용과 코드


  const [scrapId, setScrapId] = useState(null);
  const [scrapCheck, setScrapCheck] = useState(0);
  const [codeBlock, setCodeBlock] = useState(null);
  const [isScrappedChange, setIsScrappedChange] = useState(isScrapped);
  
 


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


  
  useEffect(() => {
    
    setScrapId(id);
    if(isScrapped === "YES") {
      setScrapCheck(scrapCheck + 1);
    }
    setCodeBlock(extractCodeBlock(content));

    function extractCodeBlock(contentData) {
      // 정규식을 사용하여 코드 블록을 추출합니다.
      const codeBlock = contentData.match(/```c([\s\S]*?)```/);
  
      return codeBlock ? codeBlock[0] : null;
    }

  }, [content, isScrappedChange]);

  //코드 블럭 추출 로직
 

  //스크랩버튼
  const scrapHandle = () => {
    console.log('버튼이 클릭되었습니다!');

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
        setIsScrappedChange("YES")
        alert("스크랩 완료");
      } else {
        setIsScrappedChange("NO")
        alert("스크랩 제거");
      }
    } catch (error) {
      console.log(error);
      console.log("요청실패");
    }
  };
  const copyHandle = () => {
    console.log('복사 버튼이 클릭되었습니다!');
  };


  return (
    <>
      <header className={styles.SumTitle}>
        <div className={styles.SumLeft}>
          <div>
            <button type="button">
              <img src={Back} alt="뒤로가기" />
            </button>
          </div>
        </div>
        <div className={styles.SumRight}>
          <div className={styles.S}>
            <button type="button" onClick={copyHandle}>
              <img className={styles.RightImg} src={Copy} alt="복사" />
            </button>
            <button type="button" onClick={scrapHandle}>
              {isScrapped === 'NO' || isScrapped === 'No' ? (
                <img className={styles.RightImg} src={Star} alt="텅 빈 별" />
              ) : (
                <img className={styles.RightImg} src={FillStar} alt="꽉 찬 별" />
              )}

            </button>
          </div>
        </div>
      </header>
      <article className={styles.article}>
        {content ? (
          <div style={preWrap}>
            <p>
              {content.split(codeBlock).map((text, index) => (
                <React.Fragment key={index}>
                  {text}
                  {index < content.split(codeBlock).length - 1 && (
                    <div>
                      <pre style={codeBlockStyle}>
                        <code style={contentStyle}>
                          {codeBlock.replace(/```c|```/g, "")}
                        </code>
                      </pre>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </p>
          </div>
        ) : (
          "데이터 불러오는 중..."
        )}
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

      <Bottom />
    </>
  );
};
export default ListClickSummary;
