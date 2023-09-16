import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// global style
import GlobalStyle from "./styles/GlobalStyle";

//pages
import Login from "./pages/LoginPage/Login";
import KakaoRedirection from "./Redirection/KakaoRedirection";
import NaverRedirection from "./Redirection/NaverRedirection";
// import MyPage from "./pages/MyPage/MyPage";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/kakao/callback" element={<KakaoRedirection />} />
          <Route exact path="/naver/callback" element={<NaverRedirection />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
