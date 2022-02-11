import { colours, general } from "./variables.js";

const light = {
  colours: {
    primary: colours.blueDark,
    secondary: colours.blueLight,
    accent: colours.blueLighter,
    background: colours.offWhite,
    backgroundLight: colours.offWhiteLight,
    boxShadow: colours.greyDark,
    selectedButton: colours.oofWhite,
    mainText: colours.greyDarker,
    secondaryText: colours.offWhite,
    divider: colours.blueLighter,
    disabled: colours.greyLight,
    label: colours.grey,
    error: colours.redDark,
    link: colours.blueLight,
    income: colours.green,
    expense: colours.orange,
    savings: colours.yellow,
    investment: colours.blue
  },
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
