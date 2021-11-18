// libraries
import styled from "styled-components";

// external components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const StyledContainer = styled(Container)`
  padding: 25px;
`;

const StyledGrid = styled(Grid)`
  margin-bottom: 38px !important;

  &.picker {
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export { StyledContainer, StyledGrid };
