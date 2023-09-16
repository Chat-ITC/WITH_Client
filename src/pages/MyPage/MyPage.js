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
        <div>
          <div className={styles.section_icons}>
            <img src={Scrab} alt="스크랩" />
            <p>스크랩</p>
          </div>
          <div className={styles.section_icons}>
            <img src={Recent} alt="최근 본 자료" />
            <p>최근 본 자료</p>
          </div>
          <div className={styles.section_icons}>
            <img src={C} alt="학습 언어 수정" />
            <p>학습 언어 수정</p>
          </div>
          <hr />
        </div>
      </section>

      <aside>
        <ul>
          <li>
            <div>
              <a href="/">
                <img src={Tier} alt="" />내 실력 변경
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="/">
                <img src={Tier} alt="" />1 : 1 문의하기
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="/">
                <img src="" alt="" />
                로그아웃
              </a>
            </div>
          </li>
        </ul>
      </aside>
    </Fragment>
  );
};

export default MyPage;
