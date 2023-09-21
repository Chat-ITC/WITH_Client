import Abil from "./Ability.module.css";
import React, { useState } from "react";

//png ability
import Baby from "../../assets/AddInfoIcons/baby.png";
import Boy from "../../assets/AddInfoIcons/boy.png";
import Adult from "../../assets/AddInfoIcons/adult.png";
import Grand from "../../assets/AddInfoIcons/grand.png";

const AbilModal = ({ isOpen, onClose }) => {
  const abilities = ["입문자", "초보자", "중급자", "상급자"];

  const [selectedability, setSelectedability] = useState(null);

  const handleAbilityClick = (ability) => {
    console.log(ability);
    if (onClose && typeof onClose === "function") {
      setSelectedability(ability); // 선택한 언어 설정
      onClose(ability); // 모달 창 닫기
      // 선택한 언어에 대한 추가적인 동작 수행 가능
    }
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className={Abil.Abil_title}>
        <div className={Abil.HomeBack}>
          <h3 className={Abil.Abil_head}>내 실력 변경</h3>
          <button className={Abil.HomeBtn} type="button" onClick={onClose}>
            닫기
          </button>
        </div>
        <ul className={Abil.Abil_lists}>
          {abilities.map((ability, index) => (
            <li key={index}>
              <button
                className={Abil.HomeAbilBtn}
                onClick={() => handleAbilityClick(ability)}
              >
                {index === 0 && (
                  <img className={Abil.Abil_img} src={Baby} alt="Baby" />
                )}
                {index === 1 && (
                  <img className={Abil.Abil_img} src={Boy} alt="Boy" />
                )}
                {index === 2 && (
                  <img className={Abil.Abil_img} src={Adult} alt="Adult" />
                )}
                {index === 3 && (
                  <img className={Abil.Abil_img} src={Grand} alt="Grand" />
                )}
                {ability}
                <span></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AbilModal;
