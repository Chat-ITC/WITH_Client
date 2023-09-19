import styles from "./SummaryPage.module.css";
import Back from "../../assets/AddInfoIcons/back.png";
import Scrab from "../../assets/icons/clip.png";
import Copy from "../../assets/AddInfoIcons/Copy.png";
import Careful from "../../assets/AddInfoIcons/Becareful.png";
import Becareful from "../../assets/AddInfoIcons/Becareful.png";

import Bottom from "../../component/Bottom/Bottom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
//modal
import SelectModal from "../../Modal/SelectModal/SelectModal";
import SubModal from "../../Modal/Subject/Subject";
import LangModal from "../../Modal/LangModal/LangModal";

const SummaryPage = () => {
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

  const [file, setFile] = useState(null);

  const sendDataHandle = () => {
    closeModal();
    console.log("잘 작동 하는구만~");
    console.log("선택한 파일(써머리페이지):", file);
  };

  const location = useLocation();
  useEffect(() => {
    setFile(location.state.file);

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
          <span className={styles.scrab}>스크랩하기</span>
        </div>
      </header>
      <article className={styles.article}>
        <button type="button">
          <img className={styles.Copy} src={Copy} alt="복사" />
        </button>
      </article>
      <article className={styles.article}>
        <button type="button">
          <img className={styles.Copy} src={Copy} alt="복사" />
        </button>
      </article>
      <footer>
        <div className={styles.articleDesc}>
          <img className={styles.articleImg} src={Careful} alt="주의" />
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
          <div className={styles.SelectUp}>
            <em className={styles.SelectLang}>학습언어</em>
            <button
              className={styles.SelectLanguage}
              type="button"
              onClick={openModal1}
            >
              C언어
            </button>
          </div>
          <div className={styles.SelectDown}>
            <span className={styles.SelectSubj}>
              <em className={styles.SelectSub}>주제</em>
              <img src={Becareful} alt="경고" />
            </span>
            <button
              className={styles.SelectSubject}
              type="button"
              onClick={openModal2}
            >
              선택없음
            </button>
          </div>
          <div className={styles.SelectBottom}>
            <button
              className={styles.SelectBtn}
              type="button"
              onClick={sendDataHandle}
            >
              확인
            </button>
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

      <div
        className={`${styles.HomePage_Lang} ${
          isModalOpen1 ? styles.modal_open : ""
        }`}
        style={{ display: isModalOpen1 ? "block" : "none" }}
      >
        <LangModal isOpen={isModalOpen1} onClose={closeModal1}></LangModal>
      </div>
      <Bottom />
      {/*주제 모달*/}
      <div
        className={`${styles.HomePage_Sub} ${
          isModalOpen2 ? styles.modal_open : ""
        }`}
        style={{ display: isModalOpen2 ? "block" : "none" }}
      >
        <SubModal isOpen={isModalOpen2} onClose={closeModal2}></SubModal>
      </div>
    </>
  );
};
export default SummaryPage;
