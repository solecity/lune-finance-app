// libraries
import styled from "styled-components";

// external components
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const StyledTabs = styled(Grid)`
  margin-bottom: 20px;
`;

const StyledSubTitle = styled(Paper)`
  margin-top: 8px;
  padding: 4px 15px;
`;

const StyledIconButton = styled(Grid)`
  margin-top: 20px !important;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .MuiIconButton-root {
    color: ${({ theme }) => theme.colours.primary} !important;
  }

  svg {
    width: 1.5rem !important;
  }
`;

export { StyledTabs, StyledSubTitle, StyledIconButton };
