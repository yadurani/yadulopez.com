import { createGlobalStyle } from 'styled-components'
import Theme from 'constants/uiTheme'

const { fonts, palette } = Theme

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  * {
    font-family: ${fonts[1]}, sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${palette.background};
    color: ${palette.textLight};
    overflow-x: hidden;
  }

  button {
    border-radius: 0;
    border: none;
    font-family: ${fonts[0]}, serif;
    font-weight: 700;
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }

  ul, ol {
    padding: 0;
    margin: 0;
  }

  p {
    margin: 1rem 0;
    font-size: 1rem;
    line-height: 1.7rem;
  }

  b {
    font-weight: bold;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: ${fonts[0]}, serif;
  }

  a {
    text-decoration: none;
    color: inherit;
    @media(hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export default GlobalStyle
