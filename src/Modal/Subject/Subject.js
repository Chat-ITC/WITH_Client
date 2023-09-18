import React, { useState } from "react";
import Sub from "./Subject.module.css";
const SubModal = ({ isOpen, onClose }) => {
  const subjects = [
    "이 문장의 내용을 요약해줘",
    "코드를 요약해줘",
    "오류 코드의 해결 방법을 알려줘",
  ];

  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleSubjectClick = (subject) => {
    if (onClose && typeof onClose === "function") {
      setSelectedSubject(subject);
      onClose(); // 모달 창 닫기
    }
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className={Sub.Sub_content}>
        <h2 className={Sub.HomeSubTitle}>주제</h2>
        <ul className={Sub.sub_lists}>
          {subjects.map((subject, index) => (
            <li key={index}>
              <button
                className={Sub.HomeSubBtn}
                onClick={() => {
                  handleSubjectClick(subject);
                  onClose(); // 버튼 클릭 후 모달 창 닫기
                }}
              >
                {subject}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubModal;
