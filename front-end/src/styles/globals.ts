import { createGlobalStyle } from 'styled-components'

const styled = { createGlobalStyle }

export const GlobalStyles = styled.createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    background-repeat: repeat;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

`
