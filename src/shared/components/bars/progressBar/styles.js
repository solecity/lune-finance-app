// libraries
import styled from "styled-components";

// external components
import LinearProgress from "@mui/material/LinearProgress";

const StyleContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.s7};
`;

const StyledBar = styled(LinearProgress)`
  background-color: ${({ theme }) => theme.colours.actionDisabled} !important;
  height: ${({ theme }) => theme.spacing.s2} !important;
  border-radius: ${({ theme }) => theme.spacing.s2};

  .MuiLinearProgress-bar {
    background-color: ${({ theme }) => theme.colours.primaryMain};
    border-radius: ${({ theme }) => theme.spacing.s2};
  }

  &.completed {
    .MuiLinearProgress-bar {
      background-color: ${({ theme }) => theme.colours.successMain} !important;
    }
  }
`;

const StyledParams = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
`;

const StyledValue = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.textSmall};
  line-height: ${({ theme }) => theme.lineHeight.small};
  letter-spacing: -0.15px;
`;

export { StyleContainer, StyledBar, StyledParams, StyledValue };
