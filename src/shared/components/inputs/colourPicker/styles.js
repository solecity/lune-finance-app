// libraries
import styled from "styled-components";

// external components
import Grid, { gridClasses } from "@mui/material/Grid";
import { ChromePicker } from "react-color";

const StyledPicker = styled(ChromePicker)`
  div {
    border-radius: 0 !important;
  }
`;

const StyledSwatch = styled(Grid)(({ colour }) => ({
  [`&.${gridClasses.root}`]: {
    backgroundColor: colour,
    width: "35px"
  }
}));

export { StyledPicker, StyledSwatch };
