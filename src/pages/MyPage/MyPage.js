import { Fragment } from "react";
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
            <p>스크랩</p>
          </div>
          <div className={styles.section_icons}>
            <img
              className={styles.section_img}
              src={Recent}
              alt="최근 본 자료"
            />
            <p>최근 본 자료</p>
          </div>
          <div className={styles.section_icons}>
            <img className={styles.section_img} src={C} alt="학습 언어 수정" />
            <p>학습 언어 수정</p>
          </div>
        </div>
      </section>

      <Modal />

      <aside className={styles.bottom}>
        <ul className={styles.info_lists}>
          <li className={styles.info_list}>
            <a href="/">
              <div className={styles.info_item}>
                <img className={styles.info_img} src={Tier} alt="" />
                <span className={styles.info_desc}>내 실력 변경</span>
              </div>
            </a>
          </li>
          <li className={styles.info_list}>
            <a href="/">
              <div className={styles.info_item}>
                <img className={styles.info_img} src={Question} alt="" />
                <span className={styles.info_desc}>1 : 1 문의하기</span>
              </div>
            </a>
          </li>
          <li className={styles.info_list}>
            <a href="/">
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

//디자인이 먼저라서 팝업 효과는 좀 이따가
function Modal() {
  return (
    <div className={styles.modal}>
      <h1 className={styles.modal_title}>내 실력 변경</h1>
      <p className={styles.modal_desc}>
        <button type="button">입문자</button>
      </p>
      <p className={styles.modal_desc}>
        <button type="button">초보자</button>
      </p>
      <p className={styles.modal_desc}>
        <button type="button">중급자</button>
      </p>
      <p className={styles.modal_desc}>
        <button type="button">상급자</button>
      </p>
    </div>
  );
}
export default MyPage;
