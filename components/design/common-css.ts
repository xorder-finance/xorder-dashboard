import {css} from 'styled-components'

const noSelect = () => css`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`

export const commonCss = () => css`
  body {
    font-family: 'Inter var', sans-serif;
    margin: 0 auto;
    transition-duration: 0.4s;
  }

  html {
    color: rgb(0, 0, 0);
    background-color: rgb(247, 248, 250) !important;
  }

  div {
    transition-duration: 0.4s;
  }

  button {
    :focus {
      outline: 0;
    }

    border: 0;
    transition-duration: 0.4s;
    cursor: pointer;
    ${noSelect()}
  }
`