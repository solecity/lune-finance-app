// external components
import { alpha } from "@mui/material/styles";

// styles
import { boxShadow } from "./variables.js";

const colours = {
  backgroundDefault: "#1e1f23",
  backgroundPaper: "#292E32",
  backgroundDisabled: "#F0F0F0",
  textPrimary: "#1C1C1C",
  textSecondary: "#292a2b",
  textTertiary: "#4e5455",
  textDisabled: "#C4C8CA",
  textAltPrimary: "#FEFEFE",
  blueLighter: "#d2dce3",
  primaryLight: "#8FACC0",
  primaryMain: "#E1AE21",
  primaryDark: "#2A5173",
  secondaryLight: "#ECC9D3",
  secondaryMain: "#5F6D74",
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
  actionSelected: "#292E32",
  actionDisabled: "#E0E0E0",
  actionBorder: "#FEFEFE",
  dividerLight: "#3D4348",
  dividerDark: "#1C1C1C"
};

const shadows = {
  base: `${boxShadow.external} ${alpha(colours.textPrimary, 0.25)}`,
  inner: `${boxShadow.internal} ${alpha(colours.textPrimary, 0.25)}`,
  innerFocus: `${boxShadow.internal}  ${alpha(colours.primaryDark, 0.6)}`,
  innerAlert: `${boxShadow.internal}  ${alpha(colours.errorMain, 0.6)}`
};

const borders = {
  action: `1px solid ${colours.actionBorder}`,
  inner: `${boxShadow.internal} ${alpha(colours.textPrimary, 0.25)}`,
  innerFocus: `${boxShadow.internal}  ${alpha(colours.primaryDark, 0.6)}`,
  innerAlert: `${boxShadow.internal}  ${alpha(colours.errorMain, 0.6)}`
};

const darkTheme = { colours, shadows, borders };

export { darkTheme };
