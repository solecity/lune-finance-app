// libraries
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colours.background};
    margin: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colours.black};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }

  .icon > svg {
    width: 1.1rem;
  }
  
  .MuiPaper-root {
    border-radius: 0 !important;
    color: ${({ theme }) => `${theme.colours.black} !important`};
  }

  .MuiFormControl-root {
    display: block !important;
  }
  
  .MuiFormHelperText-root {
    margin-left: 10px !important;
  }

  .MuiPickersDay-root {
    color: ${({ theme }) => `${theme.colours.black} !important`};
  }

  .MuiDivider-root {
    border-color: ${({ theme }) => `${theme.colours.grey} !important`};
  }

  .MuiCircularProgress-root {
    margin: 0 !important;
    color: ${({ theme }) => theme.colours.secondary} !important;
  }
  
  .Mui-selected {
    background-color: ${({ theme }) => theme.colours.primary} !important;
    color: ${({ theme }) => `${theme.colours.white} !important`};
  }
  
  .Mui-error, .error {
    color: ${({ theme }) => theme.colours.error} !important;
  }
`;
