import React, { useState } from "react";
import Lang2 from "./Lang2.module.css";

const LangModal = ({ isOpen, onClose }) => {
  const languages = [
    "상관없음",
    "C",
    "C++",
    "Dart",
    "Django",
    "Go",
    "Java",
    "JavaScript",
    "Kotlin",
    "Python",
    "R",
    "React",
    "Ruby",
    "Spring-Boot",
    "SQL",
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageClick = (language) => {
    if (onClose && typeof onClose === "function") {
      setSelectedLanguage(language); // 선택한 언어 설정
      onClose(language); // 모달 창 닫기
    }
  };

  return (
    <>
      {isOpen && (
        <div className={`${Lang2.LangModalBackdrop} ${Lang2.modal_open}`}>
          {/* 음영 처리 백그라운드 */}
          <div className={Lang2.LangModalContent}>
            {/* 모달 */}
            <div className={Lang2.HomeSub}>
              <h2 className={Lang2.HomeLangTitle}>학습 언어</h2>
              <span className={Lang2.HomeLangDesc}>
                요약을 원하는 언어를 선택해 주세요
              </span>
              <ul className={Lang2.LangList}>
                {languages.map((language, index) => (
                  <li key={index}>
                    <button
                      className={Lang2.HomeLangBtn}
                      onClick={() => {
                        handleLanguageClick(language);
                      }}
                    >
                      {language}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LangModal;
