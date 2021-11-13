// libraries
import styled from "styled-components";

// external components
import TextField, { textFieldClasses } from "@mui/material/TextField";

const StyledTextField = styled(TextField)(({ theme }) => ({
  [`&.${textFieldClasses.root}`]: {
    backgroundColor: theme.colors.inputBackground,
    height: "35px",
    width: "100%",
    border: "none",
    borderRadius: "0px"
  },

  "& .MuiInputBase-input": {
    display: "block",
    width: "100%",
    padding: "0.5rem 0.75rem",
    boxShadow: "inset 0px 2px 4px rgba(43, 71, 75, 0.3)",
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1.4rem"
  },

  "& .MuiInputBase-input:focus": {
    height: "35px",
    paddingTop: 0,
    paddingBottom: 0,
    color: theme.colors.black,
    boxShadow: "inset 0px 2px 4px rgba(10, 72, 99, 0.5)"
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none"
  },

  "& .MuiInputLabel-root": {
    transform: "translate(14px, 10px) scale(0.9)",
    color: "rgba(28, 28, 28, 0.4)"
  },

  "& .MuiInputLabel-shrink": {
    transform: "translate(10px, -16px) scale(0.75)",
    color: "rgba(11, 11, 11, 0.4) !important"
  }
}));

export { StyledTextField };
