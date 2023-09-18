//css
import Abil from ".//Ability.module.css";
//library
import React, { useState } from "react";

const AbilModal = ({ isOpen, onClose }) => {
  const abilities = ["입문자", "초보자", "중급자", "상급자"];

  const [selectedability, setSelectedability] = useState(null);

  const handleAbilityClick = (ability) => {
    if (onClose && typeof onClose === "function") {
      setSelectedability(ability); // 선택한 언어 설정
      onClose(); // 모달 창 닫기
      // 선택한 언어에 대한 추가적인 동작 수행 가능
    }
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2 className={Abil.MyAbilTitle}>학습 언어</h2>
        <span className={Abil.MyAbilDesc}>내 실력 변경</span>
        <ul className="ability-list">
          {abilities.map((ability, index) => (
            <li key={index}>
              <button
                className={Abil.HomeAbilBtn}
                onClick={() => handleAbilityClick(ability)}
              >
                {ability}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Abil;
