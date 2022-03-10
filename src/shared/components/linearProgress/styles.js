// libraries
import styled from "styled-components";

// external components
import LinearProgress from "@mui/material/LinearProgress";

const StyledLinearProgress = styled(LinearProgress)`
  .MuiLinearProgress-root {
    background-color: ${({ theme }) => theme.colours.actionDisabled};
  }

  .MuiLinearProgress-bar {
    background-color: ${({ theme }) => theme.colours.primaryDark};
  }
`;

export { StyledLinearProgress };
