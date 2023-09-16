import { Fragment } from "react";
import classes from "./MyPage.module.css";
import Header from "../MyPage/component/Header";
const MyPage = (name1, email1) => {
  // 백엔드에서 사용자 정보를 받아서 이름과 이메일을 입력한다.
  let name = "이지성";
  let email = "dlwltjd0505@naver.com";
  return (
    <Fragment>
      <Header />
    </Fragment>
  );
};

export default MyPage;
