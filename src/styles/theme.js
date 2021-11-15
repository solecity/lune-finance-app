// libraries
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colours.background};
    color: ${({ theme }) => theme.colours.black};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    font-family: 'Roboto', sans-serif;
  }

  svg {
    width: 1rem;
  }
  
  .MuiPaper-root {
    border-radius: 0 !important;
    color: ${({ theme }) => `${theme.colours.black} !important`} ;
  }

  .MuiFormControl-root {
    display: block !important;
  }
  
  .MuiFormHelperText-root {
    margin-left: 10px !important;
  }

  .MuiPickersDay-root {
    color: ${({ theme }) => `${theme.colours.black} !important`} 
  }
  
  .Mui-selected {
    background-color: ${({ theme }) => theme.colours.secondary} !important;
    color: ${({ theme }) => `${theme.colours.white} !important`};
  }
  
  .Mui-error {
    color: ${({ theme }) => theme.colours.error} !important;
  }
`;

const general = {
  error: "rgba(208, 86, 37, 1)",
  white: "rgba(255, 255, 255, 1)",
  black: "rgba(28, 28, 28, 1)",
  grey: "rgba(186, 193, 198, 1)",
  green: "rgba(139, 186, 93, 1)"
};

const Light = {
  colours: {
    background: "rgba(244, 244, 244, 1)",
    inputBackground: "rgba(252, 252, 252, 1)",
    primary: "rgba(10, 72, 99, 1)",
    secondary: "rgba(171, 195, 211, 1)",
    lightSecondary: "rgba(210, 220, 227, 1)",
    accent: "rgba(255, 208, 79, 1)",
    ...general
  }
};

const Dark = {
  colours: {
    background: "rgba(244, 244, 244, 1)",
    inputBackground: "rgba(252, 252, 252, 1)",
    primary: "rgba(10, 72, 99, 1)",
    secondary: "rgba(159, 185, 202, 1)",
    lightSecondary: "rgba(221, 229, 234, 1)",
    accent: "rgba(255, 200, 50, 1)",
    ...general
  }
};

export { GlobalStyles, Light, Dark };
