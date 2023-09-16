//바꿔야 되는 코드 부분

// base server url
export const BASE_URL = `${process.env.REACT_APP_SERVER_URL}`;

// social login links
export const KAKAO_LINK = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_RESTAPI_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
export const NAVER_STATE = Math.random().toString(36).slice(2, 11);
export const NAVER_LINK = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&state=${NAVER_STATE}&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}`;
