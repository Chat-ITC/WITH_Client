import { useState } from "react";
import styles from "./RadioText.module.css";

//png ability
import Baby from "../../assets/AddInfoIcons/baby.png";
import Boy from "../../assets/AddInfoIcons/boy.png";
import Adult from "../../assets/AddInfoIcons/adult.png";
import Grand from "../../assets/AddInfoIcons/grand.png";
//png programming language
import Unknown from "../../assets/AddInfoIcons/unknown.png";
import CPlus from "../../assets/AddInfoIcons/c++.png";
import Python from "../../assets/AddInfoIcons/python.png";
import Java from "../../assets/AddInfoIcons/java.png";
import C from "../../assets/AddInfoIcons/C.png";
import CSS from "../../assets/AddInfoIcons/CSS.png";
import Javascript from "../../assets/AddInfoIcons/JavaScript.png";
import Ruby from "../../assets/AddInfoIcons/Ruby.png";
import Php from "../../assets/AddInfoIcons/php.png";
import Go from "../../assets/AddInfoIcons/Go.png";
import Swift from "../../assets/AddInfoIcons/swift.png";
import Typescript from "../../assets/AddInfoIcons/Typescript.png";
import R from "../../assets/AddInfoIcons/R.png";
import Csharp from "../../assets/AddInfoIcons/C#.png";
import HTML from "../../assets/AddInfoIcons/HTML.png";

const AddInfoPage = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const skill = [
    {
      name: "입문자",
      image: Baby,
    },
    {
      name: "초보자",
      image: Boy,
    },
    {
      name: "중급자",
      image: Adult,
    },
    {
      name: "상급자",
      image: Grand,
    },
  ];

  const languages = [
    {
      name: "선택없음",
      image: Unknown,
    },
    {
      name: "C++",
      image: CPlus,
    },
    {
      name: "파이썬",
      image: Python,
    },
    {
      name: "자바",
      image: Java,
    },
    {
      name: "C언어",
      image: C,
    },
    {
      name: "CSS",
      image: CSS,
    },
    {
      name: "HTML",
      image: HTML,
    },
    {
      name: "자바스크립트",
      image: Javascript,
    },
    {
      name: "Ruby",
      image: Ruby,
    },
    {
      name: "Php",
      image: Php,
    },
    {
      name: "Go",
      image: Go,
    },
    {
      name: "Swift",
      image: Swift,
    },
    {
      name: "타입스크립트",
      image: Typescript,
    },
    {
      name: "R",
      image: R,
    },
    {
      name: "C#",
      image: Csharp,
    },
  ];

  return (
    <>
      <p className={styles.ability_title}>자신의 실력을 선택하세요</p>
      <section className={styles.ability_section}>
        <div className={styles.ability}>
          <div className={styles.grid_1x4}>
            {skill.map((item) => (
              <button
                key={item.name}
                className={`${styles.button1} ${
                  selectedSkill === item.name ? styles.selected : ""
                }`}
                onClick={() => handleSkillSelect(item.name)}
              >
                <div className={styles.itemContainer}>
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <p className={styles.language_title}>배우고 싶은 언어를 선택하세요</p>
      <section className={styles.language_section}>
        <div className={`${styles.grid_3x5}`}>
          {languages.map((language) => (
            <button
              key={language.name}
              className={`${styles.button} ${
                selectedLanguage === language.name ? styles.selected : ""
              }`}
              onClick={() => handleLanguageSelect(language.name)}
            >
              {/* 이미지 원형으로 만들기 */}
              <div
                className={`${styles.itemContainer} ${styles.itemContainer2}`}
              >
                <img src={language.image} alt={language.name} />
                <span>{language.name}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <button className={styles.nextButton}>다음</button>

      {/* 선택된 실력과 언어 표시 */}
      {selectedSkill && selectedLanguage && (
        <>
          선택된 실력: {selectedSkill}
          <br />
          선택된 언어: {selectedLanguage}
        </>
      )}
    </>
  );
};

export default AddInfoPage;
