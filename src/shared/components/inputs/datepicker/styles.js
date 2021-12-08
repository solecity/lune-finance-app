// libraries
import styled from "styled-components";
import { alpha } from "@mui/material/styles";

// external components
import FormControl from "@mui/material/FormControl";
import TextField, { textFieldClasses } from "@mui/material/TextField";
import { inputBaseClasses } from "@mui/material/InputBase";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputAdornmentClasses } from "@mui/material/InputAdornment";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { svgIconClasses } from "@mui/material/SvgIcon";

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  [`.${inputAdornmentClasses.root}`]: {
    backgroundColor: theme.colours.buttonText,
    marginLeft: "0 !important",
    marginRight: "15px !important"
  },

  [`.${svgIconClasses.root}`]: {
    color: theme.colours.buttonText,
    fontSize: "1.3rem !important"
  }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  [`&.${textFieldClasses.root}`]: {
    backgroundColor: theme.colours.secondary
  },

  [`.${outlinedInputClasses.notchedOutline}`]: {
    border: "none"
  },

  [`.${inputBaseClasses.input}`]: {
    backgroundColor: theme.colours.secondaryBackground,
    display: "block",
    width: "210px",
    padding: "0.5rem 0.75rem",
    boxShadow: `inset 0px 2px 4px ${alpha(theme.colours.boxShadow, 0.3)}`,
    color: theme.colours.mainText,
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1.4rem",

    "&:focus": {
      color: theme.colours.mainText,
      boxShadow: `inset 0px 2px 4px ${alpha(theme.colours.primary, 0.5)}`
    }
  },

  [`.${inputLabelClasses.root}`]: {
    transform: "translate(10px, 10px) scale(0.9)",
    color: alpha(theme.colours.mainText, 0.4)
  },

  [`.${inputLabelClasses.shrink}`]: {
    transform: "translate(10px, -18px) scale(0.75)",
    color: `${alpha(theme.colours.mainText, 0.4)} !important`
  }
}));

export { StyledFormControl, StyledTextField };
