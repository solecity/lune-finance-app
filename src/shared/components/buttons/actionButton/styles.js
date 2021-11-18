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
    boxShadow: "none",
    minWidth: "0 !important",
    padding: "6px !important"
  },

  "&:hover": {
    backgroundColor: `${theme.colours.accent} !important`
  }
}));

const StyledSmallCardButton = styled(StyledButton)(({ colour }) => ({
  [`&.${buttonClasses.root}`]: {
    backgroundColor: colour.bg,
    boxShadow: `${colour.inset} 0px 2px 4px ${colour.boxShadow}`,
    minWidth: "0 !important",
    padding: "6px !important",
    color: `${colour.font} !important`
  },

  [`&.${buttonClasses.root}:hover`]: {
    boxShadow: `${colour.insetHover} 0px 2px 4px ${colour.boxShadow}`
  },

  "&:hover": {
    backgroundColor: `${colour.bgHover} !important`,
    boxShadow: "none"
  }
}));

export { StyledActionButton, StyledCardButton, StyledSmallCardButton };
