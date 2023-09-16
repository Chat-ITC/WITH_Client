//eslint-disable-next-line
import { Fragment } from "react";
import { BrowserRouter, Routes, Switch } from "react-router-dom";

import "../src/styles/screen/Reset.module.css";
// global style
// import GlobalStyle from "./styles/GlobalStyle";

//pages
import Login from "./pages/LoginPage/Login";
// import KakaoRedirection from "./Redirection/KakaoRedirection";
// import NaverRedirection from "./Redirection/NaverRedirection";
// import MyPage from "./pages/MyPage/MyPage";

function App() {
  return (
    <div className="div">
      <Login />
    </div>
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
