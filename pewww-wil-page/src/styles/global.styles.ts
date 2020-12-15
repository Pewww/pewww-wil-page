import {createGlobalStyle} from 'styled-components';

const gothamBoldOtf = require('../assets/fonts/Gotham-Bold.otf');
const gothamMediumOtf = require('../assets/fonts/Gotham-Medium.otf');
const gothamLightOtf = require('../assets/fonts/Gotham-Light.otf');
const sfMonoRegularOtf = require('../assets/fonts/SFMono-Regular.otf');

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Gotham Bold";
    src: url("${gothamBoldOtf}") format('opentype');
    font-weight: 600;
  }

  @font-face {
    font-family: "Gotham Medium";
    src: url("${gothamMediumOtf}") format('opentype');
    font-weight: 400;
  }

  @font-face {
    font-family: "Gotham Light";
    src: url("${gothamLightOtf}") format('opentype');
    font-weight: 300;
  }

  @font-face {
    font-family: "SFMono Regular";
    src: url("${sfMonoRegularOtf}") format('opentype');
    font-weight: 400;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
