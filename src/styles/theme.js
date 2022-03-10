// variables
import { colours, shadows } from "./lightTheme.js";
import { general } from "./variables.js";

const light = {
  colours,
  shadows,
  ...general
};

const dark = {
  colours: {
    background: "#1e1f23;",
    secondaryBackground: "#292E32",
    primary: "#E1AE21",
    secondary: "#5F6D74",
    accent: "#8D9DA5",
    boxShadow: "#000000",
    selectedButton: "#292E32",
    mainText: "#fcfcfc",
    secondaryText: "#292a2b",
    accentText: "#4e5455",
    divider: "#3D4348"
  },
  ...general
};

const themes = {
  light,
  dark
};

export default themes;
