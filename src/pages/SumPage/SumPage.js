import styles from "./SumPage.module.css";
//png
import Back from "../../assets/AddInfoIcons/back.png";
import Scrab from "../../assets/icons/clip.png";
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
          <div className={styles}>
            <button type="button">
              <img src={Back} alt="뒤로가기" />
            </button>
            <span className={styles.selectLang}>C언어</span>
          </div>
        </div>
        <div className={styles.SumRight}>
          <div>
            <button type="button">
              <img className={styles.Copy} src={Copy} alt="복사" />
            </button>
            <button type="button">
              <img src={Scrab} alt="스크랩" />
            </button>
          </div>
        </div>
      </header>

      <Bottom />
    </>
  );
};
export default SumPage;
