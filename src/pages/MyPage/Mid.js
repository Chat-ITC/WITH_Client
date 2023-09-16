// import React, { useState } from "react";

// const MyPage = () => {
//   const [darkMode, setDarkMode] = useState(false); // 다크 모드 상태 관리

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     // 여기에 다크 모드를 적용하는 로직을 추가할 수 있습니다.
//   };

//   const handleLanguageChange = (event) => {
//     const selectedLanguage = event.target.value;
//     // 선택한 언어를 처리하는 로직을 추가할 수 있습니다.
//   };

//   return (
//     <div>
//       {/* 다크 모드/화이트 모드 스위치 버튼 */}
//       <label htmlFor="dark-mode-switch">
//         Dark Mode
//         <input
//           type="checkbox"
//           id="dark-mode-switch"
//           checked={darkMode}
//           onChange={toggleDarkMode}
//         />
//       </label>

//       {/* 스크랩 */}
//       <h2>Scrap</h2>
//       {/* 스크랩 목록을 표시하는 컴포넌트를 추가하세요. */}

//       {/* 최근 본 자료 */}
//       <h2>Recently Viewed</h2>
//       {/* 최근 본 자료 목록을 표시하는 컴포넌트를 추가하세요. */}

//       {/* 학습 언어 수정 */}
//       <h2>Edit Learning Language</h2>
//       <select onChange={handleLanguageChange}>
//         {/* 학습 언어 옵션들을 동적으로 생성하거나 하드코딩하여 옵션 요소들을 추가하세요. */}
//         <option value="english">English</option>
//         <option value="korean">Korean</option>
//         {/* ... */}
//       </select>
//     </div>
//   );
// };

// export default MyPage;
