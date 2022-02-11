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

const font = {
  textSmall: "14px",
  titleSmall: "20px",
  header: "32px"
};

const fontWeight = {
  light: "300",
  base: "400",
  medium: "500"
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
  s12: "48px",
  s16: "64px",
  s20: "80px",
  s24: "96px",
  s30: "112px",
  s32: "128px"
};

const navbar = {
  open: "180px",
  closed: "50px",
  transition: "width 0.5s cubic-bezier(0.64, 0.11, 0.38, 0.95)"
};

const input = {
  height: "36px",
  labelColour: colours.grey
};

const button = {
  height: "36px"
};

const boxShadow = {
  external: "0px 2px 4px",
  internal: "inset 0px 2px 4px"
};

const general = {
  font,
  fontWeight,
  spacing,
  navbar,
  input,
  button,
  boxShadow
};

export { colours, general };
