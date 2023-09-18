import React from "react";
const LangModal = ({ isOpen, onClose }) => {
  const languages = [
    "상관없음",
    "C++",
    "파이썬",
    "자바",
    "C언어",
    "CSS",
    "HTML",
    "자바스크립트",
    "Ruby",
    "php",
    "Go",
    "swift",
    "타입스크립트",
    "R",
    "C#",
  ];

  const handleLanguageClick = (language) => {
    onClose(); // 모달 창 닫기
    // 선택한 언어에 대한 추가적인 동작 수행 가능
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>학습 언어</h2>
        <span>요약을 원하는 언어를 선택해 주세요</span>
        <ul className="language-list">
          {languages.map((language, index) => (
            <li key={index}>
              <button onClick={() => handleLanguageClick(language)}>
                {language}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LangModal;
