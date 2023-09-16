import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.module.css";

import "../src/styles/screen/Reset.module.css";
// global style
import GlobalStyle from "./styles/GlobalStyle";

//pages
import Login from "./pages/LoginPage/Login";
import MyPage from "./pages/MyPage/MyPage";
import Bottom from "./component/Bottom/Bottom";
// import KakaoRedirection from "./Redirection/KakaoRedirection";
// import NaverRedirection from "./Redirection/NaverRedirection";
// import MyPage from "./pages/MyPage/MyPage";

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <MyPage /> */}
      <Bottom />
      <GlobalStyle />
      <Router>
        <Routes>{/* <Route path="/Login" element={<Login />} /> */}</Routes>
      </Router>
    </>
    // <BrowserRouter>
    //   <GlobalStyle />
    //   <Router>
    //     <Routes>
    //       <Route path="/Login" element={<Login />} />
    //       {/* <Route exact path="/kakao/callback" element={<KakaoRedirection />} />
    //       <Route exact path="/naver/callback" element={<NaverRedirection />} /> */}
    //     </Routes>
    //   </Router>
    // </BrowserRouter>
  );
}

export default App;
