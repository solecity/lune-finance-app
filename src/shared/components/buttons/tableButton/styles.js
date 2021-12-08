// libraries
import styled from "styled-components";

// external components
import IconButton, { iconButtonClasses } from "@mui/material/IconButton";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  [`&.${iconButtonClasses.root}`]: {
    color: theme.colours.secondary
  },

  svg: {
    width: "1.1rem"
  }
}));

export { StyledIconButton };
