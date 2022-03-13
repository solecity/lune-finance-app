// libraries
import styled from "styled-components";

// external components
import LinearProgress from "@mui/material/LinearProgress";

const StyledBar = styled(LinearProgress)`
  background-color: ${({ theme }) => theme.colours.actionDisabled} !important;

  .MuiLinearProgress-bar {
    background-color: ${({ theme }) => theme.colours.primaryMain};
    border-radius: ${({ theme }) => theme.spacing.s2};
  }
`;

export { StyledBar };
