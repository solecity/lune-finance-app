// libraries
import styled from "styled-components";
import { alpha } from "@mui/material/styles";

// external components
import Button, { buttonClasses } from "@mui/material/Button";

// utils
import { hexToRgba } from "shared/utils/utils";

const StyledButton = styled(Button)(({ theme, colour }) => ({
  [`&.${buttonClasses.root}`]: {
    backgroundColor: hexToRgba(colour, 1),
    height: "30px",
    width: "100px",
    borderRadius: 0,
    boxShadow: `0px 2px 4px ${alpha(theme.colours.boxShadow, 0.3)}`,

    "&:hover": {
      backgroundColor: `${alpha(colour, 0.5)} !important`
    }
  }
}));

export { StyledButton };
