// libraries
import styled from "styled-components";

// external components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const StyledContainer = styled(Container)`
  padding: 25px;
`;

const StyledGrid = styled(Grid)`
  margin-bottom: 35px !important;
`;

const StyledLastGrid = styled(StyledGrid)`
  padding-top: 0 !important;
`;

const StyledPicker = styled(Grid)`
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export { StyledContainer, StyledGrid, StyledLastGrid, StyledPicker };
