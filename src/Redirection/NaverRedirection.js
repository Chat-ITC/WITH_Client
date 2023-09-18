// hooks
import useAsync from "../hooks/useAsync";
import { useNavigate } from "react-router-dom";

// API
import { naverLoginReq } from "../utils/authAPIs/authAPIs";

const NaverRedirection = () => {
  const navigate = useNavigate();

  const url = new URL(window.location.href);

  const NAVER_CODE = url.searchParams.get("code");
  const NAVER_STATE = url.searchParams.get("state");

  const [state] = useAsync(() => {
    return naverLoginReq(NAVER_CODE, NAVER_STATE);
  }, [NAVER_CODE, NAVER_STATE]);

  const { loading, data, error } = state;

  if (loading) return <p>로그인 중입니다. 잠시만 기다려주세요.</p>;
  if (error) {
    const data = error.response.data;
    const statusCode = error.response.status;
    const errorMessage = error.response.data.message;
    const errorHeaders = error.response.headers;
    

    if (statusCode === 401) {
      // 400 상태 코드 처리
      if (errorMessage === 'there is no refreshToken in redis') {
        alert('세션이 만료되었습니다. 다시 로그인해 주세요')
        navigate("/login");
      } else if (errorMessage === 'your token has been expired') {
        console.log("토큰 재발급 필요");
        console.error('토큰 재발급 필요');
      }
    }
    else if (statusCode === 404) {
      console.log("404에러");
      console.log(errorHeaders.validation);
      if (errorHeaders.validation === 'no') {
        console.log("No Account");
        navigate("/AddInfoPage", { state: { data: data } });
      }
    }
    else if (statusCode === 409) {
      alert('세션이 만료되었습니다. 다시 로그인해 주세요')
      navigate("/login");
    }
  }
  if (data) {
    const accessToken = data.headers["accesstoken"];
    console.log(accessToken);
    localStorage.setItem("accessToken", accessToken);

    navigate("/HomePage");
  }
};

export default NaverRedirection;
