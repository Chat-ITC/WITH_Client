// login config
//config파일에서 NAVER_LINK와 KAKAO_LINK 상수를 가져옴 해당 상수들은 로그인 링크로 사용됨
// import { NAVER_LINK, KAKAO_LINK } from "../../config/config";

// style
// import {
//   StyledContainer,
//   Logo,
//   TitleMessage,
//   LoginMessage,
//   ButtonContainer,
//   ButtonInnerContainer,
//   Naver,
//   Kakao,
// } from "./style";

import { Fragment } from "react";
import "./Login.module.css";

import logo from "../../assets/logo/CoFe_logo.png";
import kakao from "../../assets/loginButtons/kakao-button.png";
import naver from "../../assets/loginButtons/naver-button.png";

//카카오 로그인을 처리하는 핸들러 함수. 클릭시 카카오 로그인 링크로 리다이력션.
const Login = () => {
  // const kakaoLoginHandler = () => {
  //   window.location.href = KAKAO_LINK;
  // };

  // //네이버 로그인을 처리하는 핸들러 함수. 클릭시 네이버 로그인 링크로 리다이력션.
  // const naverLoginHandler = () => {
  //   window.location.href = NAVER_LINK;
  // };

  return (
    // <StyledContainer>
    //   <Logo>CodingFriend</Logo>
    //   <TitleMessage>내 옆에 코딩 친구</TitleMessage>
    //   <ButtonContainer>
    //     <LoginMessage>SNS 계정으로 간편 로그인하기</LoginMessage>
    //     <ButtonInnerContainer>
    //       {/* <Kakao onClick={kakaoLoginHandler} />
    //       <Naver onClick={naverLoginHandler} /> */}
    //     </ButtonInnerContainer>
    //   </ButtonContainer>
    // </StyledContainer>
    <Fragment>
      <header className="LoginPage">
        <div className="LoginPage-title">
          <img src={logo} alt="로고" />
          <h1>
            내 옆에 <br /> 코딩 친구
          </h1>
        </div>
      </header>
      <footer className="LoginSection">
        <div>
          <span className="Login-desc">SNS 계정으로 간편 가입하기</span>
          <div className="Login-buttons">
            <button className="Login-button">
              <img src={kakao} alt="카카오 로그인 버튼" />
            </button>
            <button className="Login-button">
              <img src={naver} alt="네이버 로그인 버튼" />
            </button>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Login;
