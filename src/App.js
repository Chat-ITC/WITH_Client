import { useState } from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../src/styles/screen/Reset.module.css";
// global style
import GlobalStyle from "./styles/GlobalStyle";

//pages
import Login from "./pages/LoginPage/Login";
import MyPage from "./pages/MyPage/MyPage";
import AddInfo from "./pages/AddInfoPage/AddInfoPage";
import Home from "./pages/HomePage/HomePage";
import Quiz from "./pages/Quiz/Quiz";
import Skeleton from "./pages/Skeleton/Skeleton";
import SummaryPage from "./pages/SummaryPage/SummaryPage";
import RadioTest from "./pages/RadioTestPage/RadioTest";
//redirection
import KakaoRedirection from "./Redirection/KakaoRedirection";
import NaverRedirection from "./Redirection/NaverRedirection";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/AddInfoPage" element={<AddInfo />} />
          <Route path="/HomePage" element={<Home />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Skeleton" element={<Skeleton />} />
          <Route path="/RadioTest" element={<RadioTest />} />
          <Route path="/SummaryPage" element={<SummaryPage />} />
          <Route exact path="/kakao/callback" element={<KakaoRedirection />} />
          <Route exact path="/naver/callback" element={<NaverRedirection />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
