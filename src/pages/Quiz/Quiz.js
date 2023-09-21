import Bottom from "../../component/Bottom/Bottom";
import styles from "./Quiz.module.css";
//png
import QuizItem from "../../component/Quiz/QuizItem";
import ScrapItem from "../../component/ScrapItem/ScrapItem";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";


const Quiz = (props) => {
  const { quizTarget } = props; //유저 실력 넣기

  const [decodedResponse, setDecodedResponse] = useState('');
  const [encoding, setEncoding] = useState('');

  const navigate = useNavigate();

  const [quizData, setQuizData] = useState([]);
  
  const roadQuiz = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    } else {
      axios.defaults.headers.common["Authorization"] = null;
    }

    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/question/get/language`,
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
    // roadQuiz 함수를 호출하고 데이터를 받아옵니다.
    roadQuiz()
      .then((response) => {
        //map으로 배열 자체 넘기기
        //  console.log(response);
        //  console.log(response.data);
        //  console.log(response.data[0]);
        //  console.log(response.data[0].title);
        //  console.log(response.data[0].content);
        //  console.log(response.data[0].answer);
        setQuizData(response.data);

        const contentTypeHeader = response.headers['content-type'];
        const match = contentTypeHeader.match(/charset=([a-zA-Z0-9-]+)/);
        if (match && match[1]) {
          const charset = match[1].toLowerCase();
          setEncoding(charset);
          
          // 문자 인코딩을 사용하여 응답 본문을 디코딩합니다.
          if (charset === 'utf-8') {
            setDecodedResponse(response.data);
            console.log(response.data);
          } else {
            // 다른 문자 인코딩을 처리하는 로직을 여기에 추가합니다.
            // 예: iconv-lite 라이브러리를 사용하여 디코딩
          }
        } else {
          // 문자 인코딩이 지정되지 않은 경우 기본값으로 UTF-8을 사용할 수 있습니다.
          setEncoding('utf-8');
          setDecodedResponse(response.data);
          console.log(response.data);
        }
  
        console.log(encoding);
        
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

      },
    });
  };


  const [historyORScrap, setHistoryORScrap] = useState("history");

  const historyClickHandle = () => {
    setHistoryORScrap("history");
    roadQuiz()
      .then((response) => {
        setQuizData(response.data);
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
      <header className={styles.Quiz_header}>
        <h1 className={styles.BackTitle}>{encoding.level}를 위한 문제</h1>
      </header>

      <div className={styles.historyList}>
        <ul>
          {Array.isArray(quizData) &&
            quizData.map((dataList, index) => (
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
                
                <QuizItem
                  key={index}
                  title={dataList.title} // 수정된 부분
                  content={dataList.content}
                  answer={dataList.answer}
                />
              </li>
            ))}
        </ul>
      </div>








      <Bottom />
    </>
  );
};

export default Quiz;
