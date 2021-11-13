// libraries
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.black};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    font-family: 'Roboto', sans-serif;
  }
  
  .MuiPaper-root {
    border-radius: 0 !important;
  }
`;

const Light = {
  colors: {
    background: "#f4f4f4", // rgba(244, 244, 244, 1)
    inputBackground: "#fcfcfc", // rgba(252, 252, 252, 1)
    primary: "#0a4863", // rgba(10, 72, 99, 1)
    secondary: "#9fb9ca", // rgba(159, 185, 202, 1)
    lightSecondary: "#dde5ea", // rgba(221, 229, 234, 1)
    accent: "#ffc832", // rgba(255, 200, 50, 1)
    error: "#d05625", // rgba(208, 86, 37, 1)
    white: "#fff", // rgba(255, 255, 255, 1)
    black: "#0b0b0b", // rgba(11, 11, 11, 1)
    grey: "#bac1c6",
    green: "#8bba5d"
  }
};

const Dark = {
  colors: {
    background: "#f4f4f4",
    primary: "#0a4863",
    secondary: "#9fb9ca",
    lightSecondary: "#dae2e7",
    accent: "#ffc832",
    secondaryAccent: "#ffd6be",
    white: "#fff",
    darkText: "#19242A",
    error: "#d1653a"
  }
};

export { GlobalStyles, Light, Dark };
