// libraries
import styled from "styled-components";
import { alpha } from "@mui/material/styles";

// external components
import TextField, { textFieldClasses } from "@mui/material/TextField";
import { inputBaseClasses } from "@mui/material/InputBase";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { inputAdornmentClasses } from "@mui/material/InputAdornment";
import { typographyClasses } from "@mui/material/Typography";

const StyledTextField = styled(TextField)(({ theme }) => ({
  [`&.${textFieldClasses.root}`]: {
    backgroundColor: theme.colours.secondary,
    height: "36px"
  },

  [`.${inputBaseClasses.root}`]: {
    paddingRight: "0 !important"
  },

  [`.${inputBaseClasses.input}`]: {
    backgroundColor: theme.colours.secondaryBackground,
    display: "block",
    width: "100%",
    padding: "0.5rem 0.75rem",
    boxShadow: `inset 0px 2px 4px ${alpha(theme.colours.boxShadow, 0.3)}`,
    color: theme.colours.mainText,
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1.4rem",

    "&:focus": {
      height: "36px",
      paddingTop: 0,
      paddingBottom: 0,
      color: theme.colours.mainText,
      boxShadow: `inset 0px 2px 4px ${alpha(theme.colours.primary, 0.5)}`
    }
  },

  [`.${outlinedInputClasses.notchedOutline}`]: {
    border: "none"
  },

  [`.${inputLabelClasses.root}`]: {
    transform: "translate(10px, 10px) scale(0.9)",
    color: alpha(theme.colours.mainText, 0.4),

    "&.Mui-focused": {
      color: theme.colours.primary
    }
  },

  [`.${inputLabelClasses.shrink}`]: {
    transform: "translate(10px, -18px) scale(0.75)",
    color: alpha(theme.colours.mainText, 0.4)
  },

  [`.${inputAdornmentClasses.root}`]: {
    marginRight: "13px",
    marginLeft: "13px",

    [`.${typographyClasses.root}`]: {
      color: `${theme.colours.secondaryText} !important`
    }
  }
}));

export { StyledTextField };
