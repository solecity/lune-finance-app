// libraries
import styled from "styled-components";

// external components
import IconButton, { iconButtonClasses } from "@mui/material/IconButton";
import Button from "@mui/material/Button";

const StyledIconButton = styled(IconButton)(() => ({
  [`&.${iconButtonClasses.root}`]: {
    width: "1.8rem"
  }
}));

const StyledButton = styled(Button)``;

export { StyledIconButton, StyledButton };
