// libraries
import styled from "styled-components";

// external components
import TextField, { textFieldClasses } from "@mui/material/TextField";

const StyledTextField = styled(TextField)(({ theme }) => ({
  [`&.${textFieldClasses.root}`]: {
    backgroundColor: theme.colours.secondary,
    height: "36px"
  },

  "& .MuiInputBase-input": {
    backgroundColor: theme.colours.inputBackground,
    display: "block",
    width: "100%",
    padding: "0.5rem 0.75rem",
    boxShadow: "inset 0px 2px 4px rgba(43, 71, 75, 0.3)",
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1.4rem"
  },

  "& .MuiInputBase-input:focus": {
    height: "36px",
    paddingTop: 0,
    paddingBottom: 0,
    color: theme.colours.black,
    boxShadow: "inset 0px 2px 4px rgba(10, 72, 99, 0.5)"
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none"
  },

  "& .MuiInputLabel-root": {
    transform: "translate(10px, 10px) scale(0.9)",
    color: "rgba(28, 28, 28, 0.4)"
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.colours.primary
  },

  "& .MuiInputLabel-shrink": {
    transform: "translate(10px, -18px) scale(0.75)",
    color: "rgba(28, 28, 28, 0.4)"
  },

  "& .MuiInputAdornment-root": {
    marginRight: "13px"
  },

  "& .MuiTypography-root": {
    color: `${theme.colours.white} !important`
  }
}));

export { StyledTextField };
