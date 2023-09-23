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
  const [logoLoca, setLogoLoca] = useState('mypage');
  console.log(logoLoca);
  const location = "/Quiz";
  const { quizTarget } = props; //유저 실력 넣기

  const [quizLevel, setQuizLevel] = useState(null);

  const navigate = useNavigate();

  const [quizData, setQuizData] = useState([]);
  const [headers, setHeaders] = useState({});
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
    setLogoLoca('quiz');
    // roadQuiz 함수를 호출하고 데이터를 받아옵니다.
    roadQuiz()
      .then((response) => {
        //map으로 배열 자체 넘기기
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.level);
        // console.log(response.data.quiz);
        // console.log(response.data.quiz[0].title);
        //  console.log(response.data[0].title);
        //  console.log(response.data[0].content);
        //  console.log(response.data[0].answer);
        // console.log("QUIZ 빈값?", response.data.quiz);
        // if (response.data.quiz === "") {
        //   console.log("빈 값이다.");
        // }
        // setQuizData(response.data.quiz);
        // setQuizLevel(response.data.level)
        if (Array.isArray(response.data.quiz) && response.data.quiz.length > 0) {
          // 데이터가 존재하는 경우
          setQuizData(response.data.quiz);
          setQuizLevel(response.data.level);
        } else {
          // 데이터가 비어 있는 경우
          console.log("데이터가 비어 있습니다.");
          // 빈 데이터 처리를 수행하거나 필요에 따라 알림을 표시할 수 있습니다.
        }


      })
      .catch((error) => {
        const statusCode = error.response.status;
        console.log("")

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

  const handleIdCheck = (answerProp, contentProp, titleProp) => {
    console.log(answerProp);
    console.log(contentProp);
    console.log(titleProp);
    navigate("/QuizSelect", {
      state: {
        answer: answerProp,
        content: contentProp,
        title: titleProp,
        location: location
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
        <h1 className={styles.BackTitle}>{quizLevel}를 위한 문제</h1>
      </header>

      <div className={styles.historyList}>
        <ul>
          {Array.isArray(quizData) &&
            quizData.map((dataList, index) => (
              <li
                key={index}
                onClick={() =>
                  handleIdCheck(
                    dataList.answer,
                    dataList.content,
                    dataList.title
                  )
                }
              >

                <QuizItem
                  key={index}
                  answer={dataList.answer}
                  title={dataList.title} // 수정된 부분
                  content={dataList.content}   
                />
              </li>
            ))}
        </ul>
      </div>

      <Bottom logo = {logoLoca}/>
    </>
  );
};

export default Quiz;
