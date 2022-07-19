import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: '#FF8039',
    secondary: '#FFF9F5',
    secondaryLighten: 'rgba(255, 128, 57, 0.05)',
    text: '#222222',
    white: '#ffffff',
    black: '#000000',
    success: '#00CC00',
    error: '#FC5E66',
    hover: '#FF9C64',
    pink: '#fffcf4',
  },
  media: {
    desktopL: '(max-width: 1920px)',
    desktop: '(max-width: 1660px)',
    laptopL: '(max-width: 1440px)',
    laptopM: '(max-width: 1366px)',
    laptop: '(max-width: 1024px)',
    tabletL: '(max-width: 992px)',
    tablet: '(max-width: 768px)',
    mobileM: '(max-width: 576px)',
    mobile: '(max-width: 375px)',
  },
};

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 400;
  }

  p {
    margin: 0;
  }

  div, p, form, input, a, span, button {
    box-sizing: border-box;
  }

  ul, li {
    display: block;
    padding: 0;
    margin: 0;
  }
`;
