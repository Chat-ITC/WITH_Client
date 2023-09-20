import styles from "./SummaryPage.module.css";
import Back from "../../assets/AddInfoIcons/back.png";
import Scrab from "../../assets/icons/clip.png";
import Copy from "../../assets/AddInfoIcons/Copy.png";
import Becareful from "../../assets/AddInfoIcons/Becareful.png";

import axios from "axios";
import Bottom from "../../component/Bottom/Bottom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import DynamicCodeBlock from "../../component/DynamicCodeBlock/DynamicCodeBlock";
//modal
import SelectModal from "../../Modal/SelectModal/SelectModal";
import LangModal from "../../Modal/LangModal/LangModal";
import SubModal from "../../Modal/Subject/Subject";

const SummaryPage = () => {
  axios.defaults.withCredentials = true;

  const [isModalOpen, sestIsModalOpen] = useState(false);
  const openModal = () => sestIsModalOpen(true);
  const closeModal = () => sestIsModalOpen(false);

  //학습 언어
  const [isModalOpen1, sestIsModalOpen1] = useState(false);
  const openModal1 = () => sestIsModalOpen1(true);
  const closeModal1 = () => sestIsModalOpen1(false);

  //주제
  const [isModalOpen2, sestIsModalOpen2] = useState(false);
  const openModal2 = () => sestIsModalOpen2(true);
  const closeModal2 = () => sestIsModalOpen2(false);

  //주제와 언어
  const [question, setQuestion] = useState(null);
  const [language, setLanguage] = useState(null);
  const [file, setFile] = useState(null);

  //내용과 코드
  const [data, setData] = useState(null);

  const sendDataHandle = async () => {
    closeModal();
    console.log("잘 작동 하는구만~");
    console.log("선택한 파일(써머리페이지):", file);
    const formData = new FormData();

    formData.append("imageFile", file);
    formData.append("question", question);
    formData.append("fav_language", language);
    console.log("file: ", file);
    console.log("question: ", question);
    console.log("language: ", language);
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    const accessToken = localStorage.getItem("accessToken");
    console.log("토근 확인: ", accessToken);

    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/ai/summary`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        timeout: 60000,
      })
      .then((response) => {
        console.log("요청성공");
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("요청실패");
        console.log(error);
      });
  };

  const location = useLocation();
  useEffect(() => {
    setFile(location.state.file);
    setQuestion("예시 코드 만들어줘");
    setLanguage("C언어");
    openModal();
  }, [location.state.file]);

  return (
    <>
      <header className={styles.SumTitle}>
        <div className={styles.SumLeft}>
          <div>
            <button type="button">
              <img src={Back} alt="뒤로가기" />
            </button>
          </div>
          <span className={styles.selectLang}>C언어</span>
        </div>
        <div className={styles.SumRight}>
          <div>
            <button type="button">
              <img src={Scrab} alt="스크랩" />
            </button>
          </div>
          <span className={styles.Selectscrab}>스크랩</span>
        </div>
      </header>
      <article className={styles.article} >{data ? (<div><DynamicCodeBlock content={data.content} /></div>) : ("")}
        <button type="button">
          <img className={styles.Copy} src={Copy} alt="복사" />
        </button>
      </article>
      {/* <article className={styles.article}>
        <button type="button">
          <img className={styles.Copy} src={Copy} alt="복사" />
        </button>
      </article> */}
      <footer>
        <div className={styles.articleDesc}>
          <img className={styles.articleImg} src={Becareful} alt="주의" />
          <span>내용이 정확하지 않을 수 있습니다</span>
        </div>
        <div className={styles.articleBtn}>
          <button className={styles.Button} type="button">
            새로운 사진 촬영
          </button>
        </div>
      </footer>

      <SelectModal isOpen={isModalOpen} closeModal={closeModal}>
        <div className={styles.HomeMainModal}>
          <div className={styles.SelectPart}>
            <strong className={styles.SelectLang}>학습언어</strong>
            {/* 모달1가 열림*/}
            <button
              className={styles.SelectLanguage}
              type="button"
              onClick={openModal1}
            >
              C언어
            </button>
          </div>
          <div className={styles.SelectPart}>
            <span className={styles.SelectSubj}>
              <strong className={styles.SelectSub}>주제</strong>
              <img src={Becareful} alt="경고" />
            </span>
            {/* 모달2가 열림*/}
            <button
              className={styles.SelectSubject}
              type="button"
              onClick={openModal2}
            >
              선택없음
            </button>
          </div>
          <div className={styles.SelectBottom}>
            {/* 데이터 전송 버튼 */}
            <button
              className={styles.SelectBtn}
              type="button"
              onClick={sendDataHandle}
            >
              확인
            </button>
            {/* SelectModal창 닫기 버튼 */}
            <button
              onClick={closeModal}
              className={styles.SelectBtn}
              type="button"
            >
              취소
            </button>
          </div>
        </div>
      </SelectModal>

      {/* 학습언어 */}
      <div
        className={styles.HomePage_Lang}
        style={{ display: isModalOpen1 ? "block" : "none" }}
      >
        <LangModal isOpen={isModalOpen1} onClose={closeModal1} />
      </div>
      {/*주제 모달*/}
      <div
        className={styles.HomePage_Sub}
        style={{ display: isModalOpen2 ? "block" : "none" }}
      >
        <SubModal isOpen={isModalOpen2} onClose={closeModal2} />
      </div>
      <Bottom />
    </>
  );
};
export default SummaryPage;
