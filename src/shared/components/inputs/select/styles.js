// libraries
import styled from "styled-components";

// external components
import InputBase, { inputBaseClasses } from "@mui/material/InputBase";
import InputLabel, { inputLabelClasses } from "@mui/material/InputLabel";

const StyledSelect = styled(InputBase)(({ theme }) => ({
  [`&.${inputBaseClasses.root}`]: {
    backgroundColor: theme.colours.secondaryBackground,
    height: "36px",
    width: "100%",
    padding: "0.35rem 0.75rem 0 0.75rem",
    boxShadow: "inset 0px 2px 4px rgba(43, 71, 75, 0.3)",
    border: "none",
    borderRadius: "0px",
    fontSize: "0.875rem"
  },

  [`&.Mui-focused`]: {
    height: "35px",
    paddingTop: 0,
    paddingBottom: 0,
    color: theme.colours.black,
    boxShadow: "inset 0px 2px 4px rgba(10, 72, 99, 0.5)"
  }
}));

const StyledLabel = styled(InputLabel)(() => ({
  [`&.${inputLabelClasses.root}`]: {
    transform: "translate(10px, 10px) scale(0.9)",
    color: "rgba(28, 28, 28, 0.4) !important"
  },

  [`&.${inputLabelClasses.root}.Mui-focused`]: {
    transform: "translate(10px, -16px) scale(0.75)",
    color: "rgba(28, 28, 28, 0.4) !important"
  },

  [`&.${inputLabelClasses.shrink}`]: {
    transform: "translate(10px, -18px) scale(0.75)",
    color: "rgba(28, 28, 28, 0.4) !important"
  }
}));

export { StyledSelect, StyledLabel };
