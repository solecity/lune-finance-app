// libraries
import styled from "styled-components";

// external components
import Button, { buttonClasses } from "@mui/material/Button";

// utils
import { hexToRgba } from "shared/utils/utils";

const StyledButton = styled(Button)(({ colour }) => ({
  [`&.${buttonClasses.root}`]: {
    backgroundColor: hexToRgba(colour, 1),
    height: "35px",
    minWidth: "35px",
    borderRadius: "50px",
    boxShadow: "0px 2px 4px rgba(21, 41, 44, 0.3)"
  },

  "&:hover": {
    backgroundColor: `${hexToRgba(colour, 0.5)} !important`
  }
}));

export { StyledButton };
