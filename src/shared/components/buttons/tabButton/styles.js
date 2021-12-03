// libraries
import styled from "styled-components";

// external components
import Button, { buttonClasses } from "@mui/material/Button";

const StyledButton = styled(Button)(({ theme }) => ({
  [`&.${buttonClasses.root}`]: {
    backgroundColor: theme.colours.primary,
    height: "35px",
    width: "100%",
    color: theme.colours.white,
    boxShadow: "0px 2px 4px rgba(21, 41, 44, 0.3)",
    borderRadius: 0
  },

  "&:hover": {
    backgroundColor: `${theme.colours.secondary} !important`
  },

  "&.selected": {
    backgroundColor: `${theme.colours.white} !important`,
    color: theme.colours.primary,
    boxShadow: "inset 0px 2px 4px rgba(21, 41, 44, 0.3)"
  },

  "&.selected:hover": {
    boxShadow: "inset 0px 2px 4px rgba(21, 41, 44, 0.3)"
  }
}));

export { StyledButton };
