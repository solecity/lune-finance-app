// libraries
import styled from "styled-components";

// external components
import Button, { buttonClasses } from "@mui/material/Button";

const StyledButton = styled(Button)(({ theme }) => ({
  [`&.${buttonClasses.root}`]: {
    backgroundColor: theme.colours.secondary,
    height: "35px",
    width: "100%",
    color: theme.colours.white,
    borderRadius: 0,
    boxShadow: "0px 2px 4px rgba(21, 41, 44, 0.3)"
  },

  "&:hover": {
    backgroundColor: `${theme.colours.lightSecondary} !important`
  }
}));

export { StyledButton };
