// eslint-disable-next-line
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1 {
  padding: 0;
  }

  body {
    font-family: 'League Spartan', sans-serif;
  }
`;

export default GlobalStyle;
