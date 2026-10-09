import { createGlobalStyle } from "styled-components";
import modernlineFont from "../assests/modernline bold.otf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Modernline';
    src: url(${modernlineFont}) format('opentype');
    font-weight: bold;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    background-color: #0a0d18;
  }

  body {
    font-family: 'Montserrat', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: #0a0d18;
    color: #f1f5f9;
    overflow-x: hidden;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Custom Sleek Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #070913;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #00c4ff, #7000ff);
    border-radius: 999px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #00c4ff;
  }

  ::selection {
    background: rgba(0, 196, 255, 0.3);
    color: #ffffff;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }
`;
