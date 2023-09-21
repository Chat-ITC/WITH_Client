import React, { useState } from "react";
import Sub from "./Subject.module.css";
const SubModal = ({ isOpen, onClose }) => {
  const subjects = [
    "요약 및 예시코드 만들어줘",
    "쉽게 설명해주고 예시코드 만들어줘",
    "이 코드 분석해줘",
  ];

  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleSubjectClick = (subject) => {
    if (onClose && typeof onClose === "function") {
      setSelectedSubject(subject);
      onClose(subject); // 모달 창 닫기
    }
  };

  return (
    <div className={Sub.Sub_content}>
      <h2 className={Sub.HomeSubTitle}>주제</h2>
      <ul className={Sub.sub_lists}>
        {subjects.map((subject, index) => (
          <li key={index}>
            <button
              className={Sub.HomeSubBtn}
              onClick={() => {
                handleSubjectClick(subject);
                
              }}
            >
              {subject}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubModal;
