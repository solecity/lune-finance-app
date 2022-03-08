import { alpha } from "@mui/material/styles";

const colours = {
  backgroundDefault: "#FCFCFC",
  backgroundPaper: "#d5d9db",
  backgroundDisabled: "#F0F0F0",
  textPrimary: "#1C1C1C",
  textSecondary: "#414748",
  textTertiary: "#929697",
  textDisabled: "#C4C8CA",
  textAltPrimary: "#FEFEFE",
  blueLighter: "#d2dce3",
  primaryLight: "#8FACC0",
  primaryMain: "#4375A1",
  primaryDark: "#2A5173",
  secondaryLight: "#ECC9D3",
  secondaryMain: "#D5A4B1",
  secondaryDark: "#AC7A88",
  warningLight: "#FFF1A9",
  warningMain: "#FFD91B",
  warningDark: "#AE9209",
  infoLight: "#B5D6FF",
  infoMain: "#58A0F8",
  infoDark: "#2470CD",
  successLight: "#CBE7A7",
  successMain: "#8CBC54",
  successDark: "#578033",
  errorLight: "#FFC8C8",
  errorMain: "#DC4141",
  errorDark: "#900808",
  othersIncome: "#81B54E",
  othersOutcome: "#EE6632",
  othersSavings: "#EFBD25",
  othersInvestments: "#337AAD",
  actionActive: "#9AA1A7",
  actionHover: "#BABFC3",
  actionSelected: "#D1D7DC",
  actionDisabled: "#E0E0E0",
  actionBorder: "#FEFEFE"
};

const font = {
  h1: "48px",
  h2: "34px",
  h3: "24px",
  h4: "20px",
  h5: "18px",
  textLarge: "16px",
  textMedium: "14px",
  textSmall: "12px"
};

const fontWeight = {
  light: "300",
  base: "400",
  medium: "500"
};

const lineHeight = {
  h1: "56px",
  h2: "40px",
  h3: "32px",
  h4: "24px",
  large: "20px",
  base: "16px",
  small: "14px"
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
  s20: "72px",
  s24: "96px",
  s32: "128px"
};

const shadows = {
  base: `0px 2px 4px ${alpha(colours.textPrimary, 0.25)}`,
  inner: `inset 0px 2px 4px ${alpha(colours.textPrimary, 0.25)}`,
  innerFocus: `inset 0px 2px 4px  ${alpha(colours.primaryDark, 0.6)}`,
  innerAlert: `inset 0px 2px 4px  ${alpha(colours.errorMain, 0.6)}`
};

const navbar = {
  open: "180px",
  closed: "50px",
  transition: "width 0.5s cubic-bezier(0.64, 0.11, 0.38, 0.95)"
};

const input = {
  height: "40px",
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
  lineHeight,
  spacing,
  shadows,
  navbar,
  input,
  button,
  boxShadow
};

export { colours, general };
