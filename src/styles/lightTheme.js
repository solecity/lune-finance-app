// external components
import { alpha } from "@mui/material/styles";

// styles
import { boxShadow } from "./variables.js";

const colours = {
  backgroundDefault: "#F4F4F4",
  backgroundPaper: "#FCFCFC",
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
  actionBorder: "#FEFEFE",
  dividerLight: "#DCE1E7",
  dividerDark: "#1C1C1C"
};

const shadows = {
  base: `${boxShadow.external} ${alpha(colours.textPrimary, 0.25)}`,
  inner: `${boxShadow.internal} ${alpha(colours.textPrimary, 0.25)}`,
  innerFocus: `${boxShadow.internal}  ${alpha(colours.primaryDark, 0.6)}`,
  innerAlert: `${boxShadow.internal}  ${alpha(colours.errorMain, 0.6)}`
};

export { colours, shadows };
