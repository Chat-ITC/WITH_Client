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
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useRef } from "react";

const MyPage = () => {
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const [isModalOpen, sestIsModalOpen] = useState(false);
  const openModal = () => sestIsModalOpen(true);

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      sestIsModalOpen(false);
    }
  };

  const handleOutsideClick2 = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      sestIsModalOpen2(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick2);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick2);
    };
  }, []);

  const inquiryURL = "https://open.kakao.com/o/sOJwcqIf";

  //선호 언어 변경
  const closeModal = (selectedLanguage) => {
    sestIsModalOpen(false);
    if (selectedLanguage) {
      // 선택한 언어 값에 대한 작업을 수행합니다.
      console.log(`선택한 언어: ${selectedLanguage}`);

      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
      } else {
        axios.defaults.headers.common["Authorization"] = null;
      }

      const newLenguageData = {
        skill_language: selectedLanguage,
      };

      axios
        .patch(
          `${process.env.REACT_APP_SERVER_URL}/member/update/language`,
          newLenguageData,
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
          console.log("Lenguage updated successfully:", response.data);
          setUserTier(newLenguageData.tier); // 수정된 언어 데이터를 화면에 반영
          alert("학습 언어가 성공적으로 변경되었습니다!");
        })
        .catch((error) => {
          const statusCode = error.response.status;
          const errorMessage = error.response.data.message;
          if (statusCode === 401) {
            alert("토큰 재발급 필요");
            navigate("/");
          } else if (statusCode === 404) {
            if (errorMessage === "No Account") {
            }
          } else if (statusCode === 409) {
            alert("세션이 만료되었습니다. 다시 로그인해 주세요");
            navigate("/");
          }
        });
    }
  };

  //내 실력 변경
  const [isModalOpen2, sestIsModalOpen2] = useState(false);
  const openModal2 = () => sestIsModalOpen2(true);
  const closeModal2 = (selectedTier) => {
    sestIsModalOpen2(false);

    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    } else {
      axios.defaults.headers.common["Authorization"] = null;
    }

    const newTierData = {
      user_level: selectedTier,
    };

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
        alert("내 실력이 성공적으로 변경되었습니다!");
      })
      .catch((error) => {
        const statusCode = error.response.status;
        const errorMessage = error.response.data.message;
        if (statusCode === 401) {
          alert("토큰 재발급 필요");
          navigate("/");
        } else if (statusCode === 404) {
          if (errorMessage === "No Account") {
          }
        } else if (statusCode === 409) {
          alert("세션이 만료되었습니다. 다시 로그인해 주세요");
          navigate("/");
        }
      });
  };

  const [userInfo, setUserInfo] = useState(0);
  const [userTier, setUserTier] = useState(0);
  const [userLan, setUserLan] = useState(0);
  const [ref, setRef] = useState(0);

  //데이터 받아온 후 이름과 이메일 표기
  axios.defaults.withCredentials = true;

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
        console.log(userInfo);
      })
      .catch((error) => {
        const data = error.response.data;
        const statusCode = error.response.status;
        const errorHeaders = error.response.headers;

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

  //로그아웃 버튼
  const logoutButton = async () => {
    axios.defaults.withCredentials = true;
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    await axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/member/logout`,
        null,

        {
          headers: {
            accessToken: `${accessToken}`,
            refreshToken: `${refreshToken}`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // 데이터 수정 성공 시 처리
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("accessToken");
        console.log("logout successful");
        alert("로그아웃 완료");
        navigate("/");
      })
      .catch((error) => {
        const errorHeaders = error.response.headers;
        console.log(errorHeaders.validation);
        console.log(error);
        alert("오류 발생. 로그인 화면으로 돌아갑니다.");
        navigate("/");
      });
  };

  const inquiryButton = () => {
    window.location.href = inquiryURL;
  };

  return (
    <Fragment>
      <header className={styles.main_header}>
        <div className={styles.main_top}>
          <h1 className={styles.main_title}>
            안녕하세요 <br /> {userInfo.name}님
          </h1>

          <p className={styles.main_email}>{userInfo.email}</p>
        </div>
      </header>

      <section className={styles.mid}>
        <div className={styles.mid_items}>
          <Link className={styles.section_icons} to="/ScrapPage">
            <img className={styles.section_img} src={Scrab} alt="스크랩" />
            스크랩
          </Link>
          <Link className={styles.section_icons} to="/RecordPage">
            <img
              className={styles.section_img}
              src={Recent}
              alt="최근 본 자료"
            />
            최근 본 자료
          </Link>
          <button
            className={styles.section_icons}
            type="button"
            onClick={openModal}
          >
            <img className={styles.section_img} src={C} alt="학습 언어 수정" />
            <p className={styles.section_desc}>학습 언어 수정</p>
          </button>
        </div>
      </section>
      <div
        className={styles.MyPage_Lang}
        style={{ display: isModalOpen ? "block" : "none" }}
        ref={modalRef}
      >
        <LangModal isOpen={isModalOpen} onClose={closeModal} />
      </div>

      <aside className={styles.bottom}>
        <ul className={styles.info_lists}>
          <li className={styles.info_list}>
            <button type="button" className={styles.info_link}>
              <div className={styles.info_item}>
                <img className={styles.info_img} src={Tier} alt="" />
                <span className={styles.info_desc} onClick={openModal2}>
                  내 실력 변경
                </span>
              </div>
            </button>
          </li>
          <li className={styles.info_list}>
            <button
              type="button"
              onClick={inquiryButton}
              className={styles.info_link}
            >
              <div className={styles.info_item}>
                <img className={styles.info_img} src={Question} alt="" />
                <span className={styles.info_desc}>1 : 1 문의하기</span>
              </div>
            </button>
          </li>
          <li className={styles.info_list}>
            <button
              type="button"
              className={styles.info_link}
              onClick={logoutButton}
            >
              <div className={styles.info_item}>
                <img className={styles.info_img} src={Logout} alt="" />
                <span className={styles.info_desc}>로그 아웃</span>
              </div>
            </button>
          </li>
        </ul>
      </aside>
      <div
        className={`${styles.MyPage_Abil} ${
          isModalOpen2 ? styles.modal_open : ""
        }`}
        style={{ display: isModalOpen2 ? "block" : "none" }}
        ref={modalRef}
      >
        <Abil isOpen={isModalOpen2} onClose={closeModal2}></Abil>
      </div>

      <Bottom />
    </Fragment>
  );
};

export default MyPage;
