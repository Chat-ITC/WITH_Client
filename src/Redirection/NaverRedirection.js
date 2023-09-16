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
    const data = error.response?.data;
    navigate("/signup", { state: { data: data } });
  }
  if (data) {
    const accessToken = data.headers["accesstoken"];
    console.log(accessToken);
    localStorage.setItem("accessToken", accessToken);

    navigate("/");
  }
};

export default NaverRedirection;
