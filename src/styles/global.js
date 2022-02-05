// libraries
import { createGlobalStyle } from "styled-components";
import { alpha } from "@mui/material/styles";

// external components
import { circularProgressClasses } from "@mui/material/CircularProgress";
import { dividerClasses } from "@mui/material/Divider";
import { paperClasses } from "@mui/material/Paper";
import { formControlClasses } from "@mui/material/FormControl";
import { formHelperTextClasses } from "@mui/material/FormHelperText";
import { typographyClasses } from "@mui/material/Typography";

export const GlobalStyles = createGlobalStyle(({ theme }) => ({
  body: {
    backgroundColor: theme.colours.background,
    margin: 0,
    boxSizing: "border-box",
    fontFamily: "'Roboto', sans-serif",
    color: theme.colours.mainText,
    transition: "backgroundColor 0.2s ease-in, color 0.2s ease-in"
  },

  [`.${paperClasses.root}`]: {
    backgroundColor: theme.colours.secondaryBackground,
    borderRadius: "0 !important",
    color: `${theme.colours.mainText} !important`
  },

  [`.${dividerClasses.root}`]: {
    borderColor: `${theme.colours.divider} !important`
  },

  [`.${circularProgressClasses.root}`]: {
    margin: "0 !important",
    color: `${theme.colours.secondary} !important`
  },

  [`.${formControlClasses.root}`]: {
    display: "block !important"
  },

  [`.${formHelperTextClasses.root}`]: {
    marginLeft: "10px !important"
  },

  [`.${typographyClasses.root}`]: {
    color: `${theme.colours.mainText} !important`
  },

  ".MuiPickersDay-root": {
    backgroundColor: `${theme.colours.selectedButton} !important`,
    color: `${theme.colours.mainText} !important`
  },

  ".MuiPickersDay-today:not(.Mui-selected)": {
    border: `1px solid ${alpha(theme.colours.mainText, 0.5)} !important`
  },

  ".Mui-error, .error": {
    color: `${theme.colours.error} !important`
  },

  ".Mui-selected": {
    backgroundColor: `${theme.colours.primary} !important`,
    color: `${theme.colours.secondaryText} !important`
  },

  ".simplebar-scrollbar::before": {
    backgroundColor: theme.colours.primary
  },

  ".highcharts-background": {
    fill: `${theme.colours.secondaryBackground} !important`
  },

  ".highcharts-yaxis-grid > .highcharts-grid-line": {
    fill: `${theme.colours.divider} !important`,
    stroke: `${theme.colours.divider} !important`
  },

  ".highcharts-legend-item > text": {
    fill: `${theme.colours.mainText} !important`
  }
}));
