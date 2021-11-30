import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textColor};
    font-family: 'Poppins', sans-serif;
    width: 100%;
    min-height: 100vh;
    font-size: 1.6rem;
  }

  img {
    width: 100%;
    display: block;
  }

  input, button {
    font-size: 1.6rem;
  }

  /* main {
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
  } */
`;
