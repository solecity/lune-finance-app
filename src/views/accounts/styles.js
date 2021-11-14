// libraries
import styled from "styled-components";

// external components
import Grid from "@mui/material/Grid";
import SimpleBar from "simplebar-react";

const StyledGridContainer = styled(Grid)`
  padding: 10px 0;
`;

const StyledListContainer = styled(SimpleBar)`
  max-height: calc(100vh - 200px);

  .simplebar-scrollbar::before {
    background-color: ${({ theme }) => theme.colours.accent};
  }
`;

export { StyledGridContainer, StyledListContainer };
