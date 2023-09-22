// hooks
import { useNavigate } from "react-router-dom";
import useAsync from "../hooks/useAsync";
import Loading from "../component/Loading/Loading"


// API
import { kakaoLoginReq } from "../utils/authAPIs/authAPIs";

const KakaoRedirection = () => {


  const navigate = useNavigate();

  const url = new URL(window.location.href);

  const KAKAO_CODE = url.searchParams.get("code");

  const [state] = useAsync(() => {
    return kakaoLoginReq(KAKAO_CODE);
  }, [KAKAO_CODE]);

  const { loading, data, error } = state;

  if (loading) return <p>로딩중입니다</p>;
  if (error) {
    const data = error.response.data;
    const statusCode = error.response.status;
    const errorHeaders = error.response.headers;
    

    if (statusCode === 401) {
      // 400 상태 코드 처리
      alert('로그인 해주세요');
      navigate("/");
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
      navigate("/");
    }
  }

  if (data) {
    const accessToken = data.headers["accesstoken"];
    const refreshToken = data.headers["refreshtoken"];
    console.log(accessToken);
    console.log(refreshToken);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    navigate("/HomePage");
  }
};

export default KakaoRedirection;
