import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../src/styles/screen/Reset.module.css";
// global style
import GlobalStyle from "./styles/GlobalStyle";

//pages
import Login from "./pages/LoginPage/Login";
import MyPage from "./pages/MyPage/MyPage";
import Bottom from "./component/Bottom/Bottom";
import AddInfo from "./pages/AddInfoPage/AddInfoPage";
import Home from "./pages/HomePage/HomePage";
import KakaoRedirection from "./Redirection/KakaoRedirection";
import NaverRedirection from "./Redirection/NaverRedirection";
// import MyPage from "./pages/MyPage/MyPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/AddInfoPage" element={<AddInfo />} />
          <Route path="/HomePage" element={<Home />} />
        </Routes>
      </Router>

      {/* <Route exact path="/kakao/callback" element={<KakaoRedirection />} />
      <Route exact path="/naver/callback" element={<NaverRedirection />} /> */}
    </>
  );
}

export default App;
