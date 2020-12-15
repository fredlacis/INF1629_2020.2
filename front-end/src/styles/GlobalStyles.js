import { createGlobalStyle } from 'styled-components';

// The styles used on the entire app.
// Using the styled-components library to be able to give representative names for every style.

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, input, button {
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #383838;
    color: #fff;
  }
`