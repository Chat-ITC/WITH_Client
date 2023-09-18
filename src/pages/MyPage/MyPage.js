import { Fragment } from "react";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import styles from "./MyPage.module.css";

import SwitchOff from "../../assets/icons/switchOff.svg";
import SwitchOn from "../../assets/icons/switch.png";
import Scrab from "../../assets/icons/clip.png";
import Recent from "../../assets/icons/recent.png";
import C from "../../assets/icons/C.png";
import Tier from "../../assets/icons/tier.png";
import Question from "../../assets/icons/question.png";
import Logout from "../../assets/icons/logout.png";

import Bottom from "../../component/Bottom/Bottom";

const MyPage = () => {
  const [isModalOpen, sestIsModalOpen] = useState(false);

  const openModal = () => sestIsModalOpen(true);
  const closeModal = () => sestIsModalOpen(false);

  //jwt테스트
  const config = {
    headers: {
      Authorization: `${localStorage.getItem("accessToken")}`,
      // localStorage에 token이 저장되어 있는지 확인하기
    },
  };

  const jwtTest = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/member/update"`, config)
      .then(function () {
        // 성공
        // 원하는 페이지 이동 (예를 들면 마이페이지 등)
        window.location.href = "/HomePage";
      })
      .catch(function () {
        // 실패
        // 원하는 페이지 이동 (예를 들면 로그인페이지 등)
        window.location.href = "/login";
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
        className={`${styles.modal_block} ${
          isModalOpen ? styles.modal_open : ""
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
