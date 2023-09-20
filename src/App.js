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
import ScrapPage from "./pages/ScrapPage/ScrapPage";
import Record from "./pages/RecordPage/RecordPage";
import SumPage from "./pages/SumPage/SumPage";

import Bottom from "./component/Bottom/Bottom";
import Scrap from "./Modal/Scrab/scrab";
import ScrapBtn from "./component/ScrabBtn/ScrabBtn";

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
          <Route path="/ScrapPage" element={<ScrapPage />} />
          <Route path="/RecordPage" element={<Record />} />
          <Route path="/Bottom" element={<Bottom />} />
          <Route path="/Scrap" element={<Scrap />} />
          <Route path="/ScrapBtn" element={<ScrapBtn />} />
          <Route path="/SumPage" element={<SumPage />} />
          <Route exact path="/kakao/callback" element={<KakaoRedirection />} />
          <Route exact path="/naver/callback" element={<NaverRedirection />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
