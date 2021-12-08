// libraries
import styled from "styled-components";
import { alpha } from "@mui/material/styles";

// external components
import InputBase, { inputBaseClasses } from "@mui/material/InputBase";
import InputLabel, { inputLabelClasses } from "@mui/material/InputLabel";

const StyledSelect = styled(InputBase)(({ theme }) => ({
  [`&.${inputBaseClasses.root}`]: {
    backgroundColor: theme.colours.secondaryBackground,
    height: "36px",
    width: "100%",
    padding: "0.35rem 0.75rem 0 0.75rem",
    boxShadow: `inset 0px 2px 4px ${alpha(theme.colours.boxShadow, 0.3)}`,
    color: theme.colours.mainText,
    border: "none",
    borderRadius: "0px",
    fontSize: "0.875rem",

    "&.Mui-focused": {
      height: "35px",
      paddingTop: 0,
      paddingBottom: 0,
      color: theme.colours.mainText,
      boxShadow: `inset 0px 2px 4px ${alpha(theme.colours.primary, 0.5)}`
    }
  }
}));

const StyledLabel = styled(InputLabel)(({ theme }) => ({
  [`&.${inputLabelClasses.root}`]: {
    transform: "translate(10px, 10px) scale(0.9)",
    color: `${alpha(theme.colours.mainText, 0.4)} !important`,

    "&.Mui-focused": {
      transform: "translate(10px, -16px) scale(0.75)",
      color: `${alpha(theme.colours.mainText, 0.4)} !important`
    }
  },

  [`&.${inputLabelClasses.shrink}`]: {
    transform: "translate(10px, -18px) scale(0.75)",
    color: `${alpha(theme.colours.mainText, 0.4)} !important`
  }
}));

export { StyledSelect, StyledLabel };
