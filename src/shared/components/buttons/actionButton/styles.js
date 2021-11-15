// libraries
import styled from "styled-components";

// external components
import Button, { buttonClasses } from "@mui/material/Button";

const StyledButton = styled(Button)(({ theme }) => ({
  [`&.${buttonClasses.root}`]: {
    width: "100%",
    color: theme.colours.white,
    borderRadius: 0
  },

  "&:hover": {
    borderRadius: "none"
  }
}));

const StyledActionButton = styled(StyledButton)(({ theme }) => ({
  [`&.${buttonClasses.root}`]: {
    backgroundColor: theme.colours.primary,
    height: "35px",
    boxShadow: "0px 2px 4px rgba(21, 41, 44, 0.3)"
  },

  "&:hover": {
    backgroundColor: `${theme.colours.secondary} !important`
  }
}));

const StyledCardButton = styled(StyledButton)(({ theme }) => ({
  [`&.${buttonClasses.root}`]: {
    backgroundColor: theme.colours.secondary,
    boxShadow: "none"
  },

  "&:hover": {
    backgroundColor: `${theme.colours.lightSecondary} !important`
  },

  "& .MuiIconButton-colorPrimary": {
    color: `${theme.colours.white} !important`
  }
}));

export { StyledActionButton, StyledCardButton };
