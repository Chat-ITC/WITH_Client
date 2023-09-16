import styled from "styled-components";

import naverImage from "../../assets/loginButtons/naver-button.png";
import kakaoImage from "../../assets/loginButtons/kakao-button.png";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
/////////////////////////////////////////////////
//   background-image: url(${backgroundImage});
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
////////////////////////////////////////////////원래 위에 있던 코드
export const Logo = styled.h1`
  font-size: 140px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
`;
// @media ${device.wideLaptop} {
//     font-size: 120px;
//   }

//   @media ${device.narrowLaptop} {
//     font-size: 100px;
//   }

//   @media ${device.tablet} {
//     font-size: 80px;
//   }

//   @media ${device.mobile} {
//     font-size: 60px;
//   }

export const TitleMessage = styled.p`
  font-size: 29px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 68px 0;
`;

// @media ${device.wideLaptop} {
//     font-size: 26px;
//   }

//   @media ${device.narrowLaptop} {
//     font-size: 23px;
//   }

//   @media ${device.tablet} {
//     font-size: 20px;
//   }

//   @media ${device.mobile} {
//     font-size: 16px;
//     margin: 0 0 62px 0;
//   }

export const LoginMessage = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #6a6a6a;
  margin: 0 0 20px 0;
`;

//  @media ${device.wideLaptop} {
//     font-size: 22px;
//   }

//   @media ${device.narrowLaptop} {
//     font-size: 20px;
//   }

//   @media ${device.tablet} {
//     font-size: 18px;
//   }

//   @media ${device.mobile} {
//     font-size: 16px;
//   }

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 26px;
  width: 612px;
  height: 307px;
`;
//  @media ${device.wideLaptop} {
//     width: 500px;
//     height: 250px;
//   }

//   @media ${device.tablet} {
//     width: 400px;
//     height: 200px;
//   }

//   @media ${device.mobile} {
//     width: 325px;
//     height: 220px;
//   }
export const ButtonInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
`;
// @media ${device.wideLaptop} {
//     width: 250px;
//   }

//   @media ${device.tablet} {
//     width: 200px;
//   }

//   @media ${device.mobile} {
//     width: 189px;
//   }
export const Kakao = styled.div`
  background-image: url(${kakaoImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 0 20px 0;
  width: 100%;
  height: 69px;
  cursor: pointer;
`;
// @media ${device.wideLaptop} {
//     height: 60px;
//   }

//   @media ${device.tablet} {
//     height: 50px;
//   }

//   @media ${device.mobile} {
//     height: 47px;
//   }
export const Naver = styled.div`
  background-image: url(${naverImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 9px;
  width: 100%;
  height: 69px;
  cursor: pointer;
`;
//  @media ${device.wideLaptop} {
//     height: 60px;
//   }

//   @media ${device.tablet} {
//     height: 50px;
//   }

//   @media ${device.mobile} {
//     height: 47px;
//   }
