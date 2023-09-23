// Loading.js
import React from "react";
import Spinner from "../../assets/loading/Spinner.gif";
import styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <div className={styles.skel}>
      <p>
        분석을 하는데 20초에서 <br /> 1분정도 걸릴 수 있습니다.
      </p>

      <img src={Spinner} alt="로딩중" width="20%" />
    </div>
  );
};

export default Loading;
