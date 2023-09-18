import Abil from "./Ability.module.css";
import React, { useState } from "react";

const AbilModal = ({ isOpen, onClose }) => {
  const abilities = ["입문자", "초보자", "중급자", "상급자"];

  const [selectedability, setSelectedability] = useState(null);

  const handleAbilityClick = (ability) => {
    console.log(ability);
    if (onClose && typeof onClose === "function") {
      setSelectedability(ability); // 선택한 언어 설정
      console.log(selectedability);
      onClose(); // 모달 창 닫기
      // 선택한 언어에 대한 추가적인 동작 수행 가능
    }
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className={Abil.Abil_title}>
        <ul className={Abil.Abil_lists}>
          {abilities.map((ability, index) => (
            <li key={index}>
              <button
                className={Abil.HomeAbilBtn}
                onClick={() => {
                  handleAbilityClick(ability);
                  onClose(); // 버튼 클릭 후 모달 창 닫기
                }}
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

export default AbilModal;
