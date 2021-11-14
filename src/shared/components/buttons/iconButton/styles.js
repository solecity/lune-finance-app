// libraries
import styled from "styled-components";

// external components
import IconButton, { iconButtonClasses } from "@mui/material/IconButton";

const StyledIconButton = styled(IconButton)(() => ({
  [`&.${iconButtonClasses.root}`]: {
    width: "1.8rem"
  }
}));

export { StyledIconButton };
