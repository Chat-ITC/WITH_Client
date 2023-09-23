// Loading.js
import React from "react";
import Spinner from "../../assets/loading/Spinner.gif";
import styles from "./LoadingLogin.module.css";

export const LoadingLogin = () => {
  return (
    <div className={styles.skel}>
      <img src={Spinner} alt="로딩중" width="20%" />
    </div>
  );
};

export default LoadingLogin;
