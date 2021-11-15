// libraries
import styled from "styled-components";

// external components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const StyledContainer = styled(Container)`
  padding: 25px;
`;

const StyledFirstGrid = styled(Grid)`
  margin-bottom: 45px;
`;

const StyledLastGrid = styled(Grid)`
  margin: 15px 0 20px 0 !important;
`;

const StyledCheckbox = styled(Grid)`
  padding-left: 0 !important;
`;

const StyledPicker = styled(Grid)`
  margin: auto;
  padding: 0;
`;

export {
  StyledContainer,
  StyledFirstGrid,
  StyledLastGrid,
  StyledCheckbox,
  StyledPicker
};
