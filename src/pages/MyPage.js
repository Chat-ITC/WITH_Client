import { Fragment } from "react";
import classes from "./MyPage.module.css";

const MyPage = (name1, email1) => {
  // 백엔드에서 사용자 정보를 받아서 이름과 이메일을 입력한다.
  let name = "이지성";
  let email = "dlwltjd0505@naver.com";
  return (
    <Fragment>
      <header className={classes.Header}>
        <div>
          <h1 className={classes.HaderTitle}>
            안녕하세요 <br /> {name}님
          </h1>
          <span className={classes.account}>
            <p className={classes.accountDesc}>계정관리</p>
            <img
              className={classes.accountStroke}
              src="./img/stroke.png"
              alt="stroke"
            />
          </span>
        </div>
        <span className={classes.accountEmail}>{email}</span>
      </header>
    </Fragment>
  );
};

export default MyPage;
