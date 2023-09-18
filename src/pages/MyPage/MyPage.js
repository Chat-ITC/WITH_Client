//css
import styles from "./MyPage.module.css";
import SwitchOff from "../../assets/icons/switchOff.svg";
import SwitchOn from "../../assets/icons/switch.png";
import Scrab from "../../assets/icons/clip.png";
import Recent from "../../assets/icons/recent.png";
import C from "../../assets/icons/C.png";
import Tier from "../../assets/icons/tier.png";
import Question from "../../assets/icons/question.png";
import Logout from "../../assets/icons/logout.png";
//modal
import Abil from "../../Modal/Ability/Ability";
import LangModal from "../../Modal/LangModal/LangModal";
//component
import Bottom from "../../component/Bottom/Bottom";
//library
import { Fragment } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const MyPage = () => {
  const navigate = useNavigate();

  const [isModalOpen, sestIsModalOpen] = useState(false);
  const openModal = () => sestIsModalOpen(true);
  const closeModal = () => sestIsModalOpen(false);

  const [isModalOpen2, sestIsModalOpen2] = useState(false);
  const openModal2 = () => sestIsModalOpen2(true);
  const closeModal2 = () => sestIsModalOpen2(false);

  const [userInfo, setUserInfo] = useState(0);
  const [userTier, setUserTier] = useState(0);
  const [userLan, setUserLan] = useState(0);
  const [ref, setRef] = useState(0);
  //데이터 받아온 후 이름과 이메일 표기
  axios.defaults.withCredentials = true;

  const [myVariable, setMyVariable] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // 31초마다 myVariable 값을 변경
      setMyVariable(prevValue => prevValue + 1);
    }, 31000); // 31초마다 실행하려면 31000 밀리초(31 * 1000)를 사용합니다.

    // 컴포넌트가 언마운트될 때 setInterval을 정리(clear)합니다.
    return () => clearInterval(interval);
  }, []);


  const authReq = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    } else {
      axios.defaults.headers.common["Authorization"] = null;
    }

    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/member/update`,
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
  //정보 받아오기
  
  useEffect(() => {
    
    
    // authReq 함수를 호출하고 데이터를 받아옵니다.
    authReq()
      .then((response) => {
        // 데이터를 성공적으로 받아왔을 때 처리
        setUserInfo(response.data);
      })
      .catch((error) => {

        console.error("Error fetching data:", error);
        const statusCode = error.response.status;
        if (statusCode === 401) {
          console.log("401에러");

          const refreshToken = localStorage.getItem("refreshToken");
          
          console.log("refreshToken: ", refreshToken);
          // 서버에 POST 요청 보내기

          const postData = {};

          axios.post(`${process.env.REACT_APP_SERVER_URL}/member/refreshToken`, postData, {
            headers: {
              refreshToken: `${refreshToken}`,
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          })
            .then((postResponse) => {
              
              // POST 요청 성공 처리
              

              // 여기에서 필요한 작업을 수행할 수 있습니다.
            })
            .catch((postError) => {
              localStorage.removeItem("accessToken");
              localStorage.removeItem("refreshToken");

              const accessToken = postError.headers["accesstoken"];
              const refreshToken = postError.headers["refreshtoken"];

              console.log("POST request successful:", postError.data);

              localStorage.setItem("accessToken", accessToken);
              console.log("최종accessToken값: ", accessToken);
              localStorage.setItem("refreshToken", refreshToken);
              console.log("최종refreshToken값: ", refreshToken);
              
            });
        }
      });
  },[myVariable]);

  //내 실력 변경(일단 입문자만)
  const handleChangeTeir = (props) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    } else {
      axios.defaults.headers.common["Authorization"] = null;
    }

    const newTierData = {
      user_level: props,
    }; // 나중에 변수로 바꾸기 임시적으로 하드코딩.

    axios
      .patch(
        `${process.env.REACT_APP_SERVER_URL}/member/update/level`,
        newTierData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // 데이터 수정 성공 시 처리
        console.log("Tier updated successfully:", response.data);
        setUserTier(newTierData.tier); // 수정된 티어 데이터를 화면에 반영
      })
      .catch((error) => {
        const statusCode = error.response.status;
        const errorMessage = error.response.data.message;
        if (statusCode === 401) {
          alert('토큰 재발급 필요');
          window.location.href = `${process.env.REACT_APP_SERVER_URL}/member/refreshToken`;
        }
        else if (statusCode === 404) {
          if (errorMessage === "No Account") {
          }
        }
        else if (statusCode === 409) {
          alert("세션이 만료되었습니다. 다시 로그인해 주세요");
          navigate("/login");
        }
      });
  };

  // const sendJSONDataToSpringBoot = async (userprop) => {
  //   try {
  //     const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/member/signup`, userprop);
  //     console.log(response.data); // 서버로부터 받은 응답 데이터 처리
  //   } catch (error) {
  //     console.error(error); // 에러 처리
  //   }
  // };

  return (
    <Fragment>
      <header className={styles.main_header}>
        <div className={styles.main_top}>
          <h1 className={styles.main_title}>
            안녕하세요 <br /> {userInfo.name}님
          </h1>

          <p className={styles.main_email}>{userInfo.email}</p>
        </div>
        <span className={styles.main_account}>계정 관리</span>
      </header>

      <section className={styles.mid}>
        <div className={styles.mid_items}>
          <button className={styles.section_icons}>
            <img className={styles.section_img} src={Scrab} alt="스크랩" />
            <p className={styles.section_desc}>스크랩</p>
          </button>
          <button className={styles.section_icons}>
            <img
              className={styles.section_img}
              src={Recent}
              alt="최근 본 자료"
            />
            <p className={styles.section_desc}>최근 본 자료</p>
          </button>
          <button type="button" onClick={()=>openModal}>
            <img className={styles.section_img} src={C} alt="학습 언어 수정" />
            <p className={styles.section_desc}>학습 언어 수정</p>
          </button>
        </div>
      </section>
      <div
        className={`${styles.MyPage_Lang} ${isModalOpen ? styles.modal_open : ""
          }`}
        style={{ display: isModalOpen ? "block" : "none" }}
      >
        <LangModal isOpen={isModalOpen} onClose={()=>closeModal}></LangModal>
      </div>

      <aside className={styles.bottom}>
        <ul className={styles.info_lists}>
          <li className={styles.info_list}>
            <button type="button" className={styles.info_link}>
              <div className={styles.info_item}>
                <img className={styles.info_img} src={Tier} alt="" />
                <span className={styles.info_desc} onClick={()=>openModal2}>
                  내 실력 변경
                </span>
              </div>
            </button>
          </li>
          <li className={styles.info_list}>
            <a href="/" className={styles.info_link}>
              <div className={styles.info_item}>
                <img className={styles.info_img} src={Question} alt="" />
                <span className={styles.info_desc}>1 : 1 문의하기</span>
              </div>
            </a>
          </li>
          <li className={styles.info_list}>
            <a href="/" className={styles.info_link}>
              <div className={styles.info_item}>
                <img className={styles.info_img} src={Logout} alt="" />
                <span className={styles.info_desc}>로그 아웃</span>
              </div>
            </a>
          </li>
        </ul>
      </aside>
      <div
        className={`${styles.MyPage_Abil} ${isModalOpen2 ? styles.modal_open : ""
          }`}
        style={{ display: isModalOpen2 ? "block" : "none" }}
      >
        <Abil isOpen={isModalOpen2} onClose={()=>closeModal2}></Abil>
      </div>
      
      <Bottom />
    </Fragment>
  );
};

export default MyPage;
