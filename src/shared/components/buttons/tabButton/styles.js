// libraries
import styled from "styled-components";
import { alpha } from "@mui/material/styles";

// external components
import Button, { buttonClasses } from "@mui/material/Button";

const StyledButton = styled(Button)(({ theme }) => ({
  [`&.${buttonClasses.root}`]: {
    backgroundColor: theme.colours.primary,
    height: "35px",
    width: "100%",
    color: theme.colours.buttonText,
    borderRadius: 0,
    boxShadow: `0px 2px 4px ${alpha(theme.colours.boxShadow, 0.3)}`
  },

  "&:hover": {
    backgroundColor: `${theme.colours.secondary} !important`
  },

  "&.selected": {
    backgroundColor: `${theme.colours.buttonText} !important`,
    color: theme.colours.primary,
    boxShadow: `inset 0px 2px 4px ${alpha(theme.colours.boxShadow, 0.3)}`,

    "&:hover": {
      boxShadow: `inset 0px 2px 4px ${alpha(theme.colours.primary, 0.4)}`
    }
  }
}));

export { StyledButton };
