import { Fragment } from "react";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import styles from "./MyPage.module.css";
import axios from "axios";

import SwitchOff from "../../assets/icons/switchOff.svg";
import SwitchOn from "../../assets/icons/switch.png";
import Scrab from "../../assets/icons/clip.png";
import Recent from "../../assets/icons/recent.png";
import C from "../../assets/icons/C.png";
import Tier from "../../assets/icons/tier.png";
import Question from "../../assets/icons/question.png";
import Logout from "../../assets/icons/logout.png";

import Bottom from "../../component/Bottom/Bottom";

import React, { useEffect } from 'react';

const MyPage = () => {
  const [isModalOpen, sestIsModalOpen] = useState(false);

  const openModal = () => sestIsModalOpen(true);
  const closeModal = () => sestIsModalOpen(false);

  const [data, setData] = useState();


  const authReq = async () => {
    axios.defaults.withCredentials = true;
    console.log("실행 몇번?")
  
    const accessToken = localStorage.getItem('accessToken');
    console.log("accessToken이게 뭘까?", accessToken);
    if (accessToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    } else {
      axios.defaults.headers.common['Authorization'] = null;
    }
  
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/users/auth`,
      {
        headers: {
          Authorization: accessToken,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      }
    );
    console.log("response이게 뭘까?", response);
    return response;
  };
  //jwt테스트
  useEffect(() => {
    const req =authReq();
    console.log("req이게 뭘까?", req);
    
    // const token = localStorage.getItem("accessToken")
    // console.log(token);
    // fetch(`${process.env.REACT_APP_SERVER_URL}/member/update`, {
    //   method: 'GET', // GET은 기본값이므로 안써줘도 작동한다.
    //   headers: { authorization: token } //토큰형식은 백엔드와 키값을 맞춰야합니다.
      
    // }) // 데이터를 받을때는 보내줄 데이터가 없기때문에 토큰만 전해준다! 
    // .then(function () { // 성공
    //   // 원하는 페이지 이동 (예를 들면 마이페이지 등)
    //   // window.location.href = "/HomePage";
    //   console.log("성공");
    // })  
    // .then(res => res.json())
    //   // 서버에서 전송받은데이터를 자바스크립트의 형식으로 변경해준다고 생각해주세용
    //   .then(data => setData(data))
    //   // 우리가 페이지에서 사용 할 수 있도록 state훅에 저장~
    //   .catch(error => {
    //     // 에러 처리
    //     console.error(error);
    //     console.error("실패");
    //   })
    //   console.log(data);
    
  }, [])

 

  

  //이제 가져온 데이터 처리.


  

  



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
            안녕하세요 <br /> 이녀석님
          </h1>

          <p className={styles.main_email}>dlwltjd0505@naver.com</p>
        </div>
        <span className={styles.main_account}>계정 관리</span>
      </header>

      <section className={styles.mid}>
        <div className={styles.mid_items}>
          <div className={styles.section_icons}>
            <img className={styles.section_img} src={Scrab} alt="스크랩" />
            <p className={styles.section_desc}>스크랩</p>
          </div>
          <div className={styles.section_icons}>
            <img
              className={styles.section_img}
              src={Recent}
              alt="최근 본 자료"
            />
            <p className={styles.section_desc}>최근 본 자료</p>
          </div>
          <div className={styles.section_icons}>
            <img className={styles.section_img} src={C} alt="학습 언어 수정" />
            <p className={styles.section_desc}>학습 언어 수정</p>
          </div>
        </div>
      </section>

      <div
        className={`${styles.modal_block} ${isModalOpen ? styles.modal_open : ""
          }`}
        style={{ display: isModalOpen ? "block" : "none" }}
      >
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <p className={styles.modal_header}>내 실력 변경</p>
          <div>
            <button className={styles.modal_ability} type="button" onClick={{}}>
              입문자
            </button>
            <button className={styles.modal_ability} type="button" onClick={{}}>
              초보자
            </button>
            <button className={styles.modal_ability} type="button" onClick={{}}>
              중급자
            </button>
            <button className={styles.modal_ability} type="button" onClick={{}}>
              상급자
            </button>
          </div>
        </Modal>
      </div>

      <aside className={styles.bottom}>
        <ul className={styles.info_lists}>
          <li className={styles.info_list}>
            <button
              type="button"
              onClick={openModal}
              className={styles.info_link}
            >
              <div className={styles.info_item}>
                <img className={styles.info_img} src={Tier} alt="" />
                <span className={styles.info_desc}>내 실력 변경</span>
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
      <Bottom />
    </Fragment>
  );
};

export default MyPage;
