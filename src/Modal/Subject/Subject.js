import React, { useState } from "react";
import Subject from "./Subject.module.css";
const SubModal = ({ isOpen, onClose }) => {
  const subjects = [
    "이 문장의 내용을 요약해줘",
    "코드를 요약해줘",
    "오류 코드의 해결 방법을 알려줘",
  ];

  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleSubjectClick = (subjects) => {
    if (onClose && typeof onClose === "function") {
      setSelectedSubject(Subject); // 선택한 언어 설정
      onClose(); // 모달 창 닫기
      // 선택한 언어에 대한 추가적인 동작 수행 가능
    }
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2 className={Subject.HomeSubTitle}>주제</h2>
        <ul className="subject-list">
          {subjects.map((Subject, index) => (
            <li key={index}>
              <button
                className={Subject.HomeSubBtn}
                onClick={() => handleSubjectClick(Subject)}
              >
                {subjects}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubModal;
