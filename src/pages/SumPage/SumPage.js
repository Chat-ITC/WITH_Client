import styles from "./SumPage.module.css";
//png
import Back from "../../assets/AddInfoIcons/back.png";
import Scrap from "../../assets/icons/clip.png";
import Copy from "../../assets/AddInfoIcons/Copy.png";
import Becareful from "../../assets/AddInfoIcons/Becareful.png";

import React from "react";
import axios from "axios";
//component
import Bottom from "../../component/Bottom/Bottom";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

//modal
import SelectModal from "../../Modal/SelectModal/SelectModal";
import LangModal from "../../Modal/LangModal/LangModal";
import SubModal from "../../Modal/Subject/Subject";

const SumPage = () => {
  axios.defaults.withCredentials = true;

  return (
    <>
      <header className={styles.SumTitle}>
        <div className={styles.SumLeft}>
          <div className={styles.SumLeft2}>
            {/* 버튼 링크로 해서 마이페이지로 가기*/}
            <button type="button">
              <img className={styles.selectImg} src={Back} alt="뒤로가기" />
            </button>
            <span className={styles.selectLang}>C언어</span>
          </div>
        </div>
        <div className={styles.SumRight}>
          <div>
            <button className={styles.RightImg} type="button">
              <img className={styles.Copy} src={Copy} alt="복사" />
            </button>
            <button className={styles.RightImg} type="button">
              <img className={styles.Scrap} src={Scrap} alt="스크랩" />
            </button>
          </div>
        </div>
      </header>

      <footer>
        <div className={styles.footer_sum}>
          <img className={styles.footer_img} src={Becareful} alt="주의" />
          <span className={styles.footer_desc}>
            내용이 정확하지 않을 수 있습니다
          </span>
        </div>
      </footer>

      <Bottom />
    </>
  );
};
export default SumPage;
