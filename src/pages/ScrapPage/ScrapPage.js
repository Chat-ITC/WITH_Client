//css
import styles from "./ScrapPage.module.css";
//component
import Bottom from "../../component/Bottom/Bottom";
import HistoryItem from "../../component/HistoryItem/HistoryItem";
import ScrapItem from "../../component/ScrapItem/ScrapItem";
//png
import Back from "../../assets/AddInfoIcons/back.png";

//library
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const ScrapPage = () => {
  const navigate = useNavigate();
  const location = "/MyPage";

  const [historyData, setHistoryData] = useState([]);

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
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data[0]);
        // console.log(response.data[0].title);

        setHistoryData(response.data);
        historyClickHandle();
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

  const handleIdCheck = (contentProp, isScrappedProp, idProp) => {
    console.log(contentProp);
    console.log(isScrappedProp);
    console.log(idProp);
    navigate("/ListClickSummary", {
      state: {
        content: contentProp,
        isScrapped: isScrappedProp,
        id: idProp,
        location: location
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



  return (
    <>
      <header className={styles.ScrapHeader}>
        <Link className={styles.BackBtn} to="/MyPage">
          <img src={Back} alt="뒤로가기" />
        </Link>
        <h1 className={styles.ScrapTitle}>스크랩</h1>
      </header>

      <div className={styles.historyList}>
        <ul>
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

export default ScrapPage;
