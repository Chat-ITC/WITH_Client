import styles from "./AddInfoPage.module.css";

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
import Javascript from "../../assets/AddInfoIcons/JavaScript.png";
import Ruby from "../../assets/AddInfoIcons/Ruby.png";
import Django from "../../assets/icons/Djang.png";
import Go from "../../assets/AddInfoIcons/Go.png";
import Swift from "../../assets/AddInfoIcons/swift.png";
import R from "../../assets/AddInfoIcons/R.png";
import Spring_Boot from "../../assets/icons/Spring_boot.png";
import Dart from "../../assets/icons/Dart.png";
import Kotlin from "../../assets/icons/Kotlin.png";
import SQL from "../../assets/icons/SQL.png";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const AddInfoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [btnOn, setBtnOn] = useState(false);

  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleSkillSelect = (e) => {
    setSelected1(true);
    const value = e;
    setSelectedSkill(value);
  };

  const handleLanguageSelect = (e) => {
    setSelected2(true);
    const value = e;
    setSelectedLanguage(value);
  };

  //두개가 모두 참인경우 버튼 활성화
  useEffect(() => {
    console.log(selected1);
    console.log(selected2);
    if (selected1 && selected2) {
      console.log("두 조건이 모두 충족됩니다.");
      setBtnOn(true);
    } else {
      setBtnOn(false);
    }
  }, [selected1, selected2]);

  //데이터묶기
  const handleNextPage = () => {
    const addUserInfo = {
      name: location.state.data.name,
      email: location.state.data.email,
      loginProvider: location.state.data.loginProvider,
      snsId: location.state.data.snsId,
      user_level: selectedSkill,
      skill_language: selectedLanguage,
      title: "[사용 가이드]",
      content: "https://github.com/Chat-ITC",
      fav_language: "with",
      isScrapped: "NO",
    };
    sendJSONDataToSpringBoot(addUserInfo);

    navigate("/");
  };

  //데이터전송
  const sendJSONDataToSpringBoot = async (userprop) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/member/signup`,
        userprop
      );
      console.log(response.data); // 서버로부터 받은 응답 데이터 처리
    } catch (error) {
      const statusCode = error.response.status;

      if (statusCode === 401) {
        console.alert("토큰 재발급 필요");
        window.location.href = `${process.env.REACT_APP_SERVER_URL}/member/refreshToken`;
      } else if (statusCode === 404) {
        console.log("404에러");
      } else if (statusCode === 409) {
        alert("세션이 만료되었습니다. 다시 로그인해 주세요");
        navigate("/");
      }
    }
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
      name: "Unknown",
      image: Unknown,
    },
    {
      name: "C",
      image: C,
    },
    {
      name: "C++",
      image: CPlus,
    },
    {
      name: "Dart",
      image: Dart,
    },
    {
      name: "Django",
      image: Django,
    },
    {
      name: "Go",
      image: Go,
    },
    {
      name: "Java",
      image: Java,
    },
    {
      name: "Javascript",
      image: Javascript,
    },
    {
      name: "Kotlin",
      image: Kotlin,
    },
    {
      name: "Python",
      image: Python,
    },
    {
      name: "Ruby",
      image: Ruby,
    },
    {
      name: "R",
      image: R,
    },
    {
      name: "Spring-Boot",
      image: Spring_Boot,
    },
    {
      name: "SQL",
      image: SQL,
    },
    {
      name: "Swift",
      image: Swift,
    },
  ];

  return (
    <>
      <p className={styles.ability_title}>자신의 실력을 선택하세요</p>
      <section className={styles.ability_section}>
        <div className={`${styles.ability} ${styles.horizontal}`}>
          {skill.map((item) => (
            <label
              key={item.name}
              htmlFor={item.name}
              className={`${styles.radioItem} ${
                selectedSkill === item.name ? styles.selected : ""
              }`}
            >
              <div className={item.TouchEvent}>
                <input
                  type="radio"
                  id={item.name}
                  name="skill"
                  value={item.name}
                  checked={selectedSkill === item.name}
                  onChange={() => handleSkillSelect(item.name)}
                />
                <div className={styles.itemContainer1}>
                  <div
                    className={`${styles.itemContainer} ${styles.withImage}`}
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <span>{item.name}</span>
                </div>
              </div>
            </label>
          ))}
        </div>
      </section>
      <section className={styles.language_section}>
        <p className={styles.language_title}>배우고 싶은 언어를 선택하세요</p>
        <div className={`${styles.grid_3x5}`}>
          {languages.map((language) => (
            <label
              key={language.name}
              htmlFor={language.name}
              className={`${styles.button} ${
                selectedLanguage === language.name ? styles.selected : ""
              }`}
            >
              <input
                type="radio"
                id={language.name}
                name="language"
                value={language.name}
                checked={selectedLanguage === language.name}
                onChange={() => handleLanguageSelect(language.name)}
                style={{ display: "none" }}
              />
              {/* 이미지 원형으로 만들기 */}
              <div
                className={`${styles.itemContainer3} ${styles.itemContainer4}`}
              >
                <img
                  className={styles.RadioImg}
                  src={language.image}
                  alt={language.name}
                />
                <span className={styles.image_name}>{language.name}</span>
              </div>
            </label>
          ))}
        </div>
      </section>

      <button
        disabled={!btnOn}
        className={btnOn ? styles.nextButton : styles.noButton}
        onClick={handleNextPage}
      >
        다음
      </button>

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
