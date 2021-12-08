// libraries
import styled from "styled-components";
import { alpha } from "@mui/material/styles";

// external components
import Button, { buttonClasses } from "@mui/material/Button";

const StyledButton = styled(Button)(({ theme }) => ({
  [`&.${buttonClasses.root}`]: {
    width: "100%",
    color: theme.colours.buttonText,
    borderRadius: 0
  }
}));

const StyledActionButton = styled(StyledButton)(({ theme }) => ({
  [`&.${buttonClasses.root}`]: {
    backgroundColor: theme.colours.primary,
    height: "35px",
    boxShadow: `0px 2px 4px ${alpha(theme.colours.boxShadow, 0.3)}`,

    "&:hover": {
      backgroundColor: `${theme.colours.secondary} !important`
    }
  }
}));

const StyledCardButton = styled(StyledButton)(({ theme }) => ({
  [`&.${buttonClasses.root}`]: {
    backgroundColor: theme.colours.accent,
    boxShadow: "none",
    minWidth: "0 !important",
    padding: "6px !important",

    "&:hover": {
      backgroundColor: `${theme.colours.secondary} !important`
    },

    svg: {
      width: "1.1rem"
    }
  }
}));

const StyledSmallCardButton = styled(StyledButton)(({ colour, theme }) => ({
  [`&.${buttonClasses.root}`]: {
    backgroundColor: colour.bg,
    boxShadow: `${colour.inset} 0px 2px 4px ${alpha(
      theme.colours.boxShadow,
      0.3
    )}`,
    minWidth: "0 !important",
    padding: "6px !important",
    color: `${colour.font} !important`,

    "&:hover": {
      backgroundColor: `${colour.bgHover} !important`,
      boxShadow: `${colour.insetHover} 0px 2px 4px ${alpha(
        theme.colours.boxShadow,
        0.3
      )}`
    },

    svg: {
      width: "1.1rem"
    }
  }
}));

export { StyledActionButton, StyledCardButton, StyledSmallCardButton };
