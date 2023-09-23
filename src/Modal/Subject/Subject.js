import React, { useState } from "react";
import Sub from "./Subject.module.css";
const SubModal = ({ isOpen, onClose }) => {
  const subjects = [
    "상관없음",
    "내용요약",
    "쉬운설명",
    "코드 분석",
    "내용요약 및 예시코드",
    "쉬운설명과 예시코드",
  ];

  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleSubjectClick = (subject) => {
    if (onClose && typeof onClose === "function") {
      setSelectedSubject(subject);
      onClose(subject); // 모달 창 닫기
    }
  };

  const [isModalOpen, sestIsModalOpen] = useState(false);
  const openModal = () => sestIsModalOpen(true);
  const closeModal = () => {
    sestIsModalOpen(false);
  };

  return (
    <div className={Sub.Sub_content} isOpen={openModal} onClose={closeModal}>
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
