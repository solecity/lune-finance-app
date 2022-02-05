import { alpha } from "@mui/material/styles";

const colours = {
  white: "#ffffff",
  black: "#000000",
  offWhiteLight: "#fcfcfc",
  offWhite: "#f4f4f4",
  greyLight: "#d5d9db",
  grey: "#a0a8ac",
  greyDark: "#414748",
  greyDarker: "#292a2b",
  greyDarkest: "#1c1c1c",
  green: "#81b54e",
  orange: "#d95522",
  red: "#e04343",
  redDark: "#B11E19",
  yellow: "#ddb53d",
  yellowDark: "#e1ae21",
  blueLighter: "#d2dce3",
  blueLight: "#abc3d3",
  blue: "#3f7ba6",
  blueDark: "#2a5173"
};

const fontWeight = {
  light: "300",
  base: "400"
};

const spacing = {
  s1: "4px",
  s2: "6px",
  s3: "8px",
  s4: "12px",
  s5: "16px",
  s6: "20px",
  s7: "24px",
  s8: "32px",
  s9: "36px",
  s10: "40px",
  s11: "48px"
};

const input = {
  height: "36px",
  boxShadow: "inset 0px 2px 4px",
  labelColour: colours.grey
};

const general = {
  fontWeight,
  spacing,
  input
};

const Light = {
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
    link: colours.blueLight
  },
  ...general
};

const Dark = {
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

export { Light, Dark };
