// libraries
import styled from "styled-components";

// external components
import FormControl from "@mui/material/FormControl";
import TextField, { textFieldClasses } from "@mui/material/TextField";

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  "& .MuiInputAdornment-root": {
    marginLeft: "0 !important",
    marginRight: "15px !important"
  },

  "& .MuiSvgIcon-root": {
    color: theme.colours.secondaryBackground,
    fontSize: "1.3rem !important"
  }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  [`&.${textFieldClasses.root}`]: {
    backgroundColor: theme.colours.secondary
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none"
  },

  "& .MuiInputBase-input": {
    backgroundColor: theme.colours.secondaryBackground,
    display: "block",
    width: "210px",
    padding: "0.5rem 0.75rem",
    boxShadow: "inset 0px 2px 4px rgba(43, 71, 75, 0.3)",
    color: theme.colours.black,
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1.4rem"
  },

  "& .MuiInputBase-input:focus": {
    color: theme.colours.black,
    boxShadow: "inset 0px 2px 4px rgba(10, 72, 99, 0.5)"
  },

  "& .MuiInputLabel-root": {
    transform: "translate(10px, 10px) scale(0.9)",
    color: "rgba(28, 28, 28, 0.4)"
  },

  "& .MuiInputLabel-shrink": {
    transform: "translate(10px, -18px) scale(0.75)",
    color: "rgba(28, 28, 28, 0.4) !important"
  }
}));

export { StyledFormControl, StyledTextField };
