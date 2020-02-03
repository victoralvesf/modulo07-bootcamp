import { createGlobalStyle } from 'styled-components';

import Background from '../assets/images/background.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191920 url(${Background}) no-repeat center top;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
