// libraries
import styled from "styled-components";

// external components
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const StyledSubTitle = styled(Paper)`
  margin-top: 8px;
  padding: 4px 15px;
`;

const StyledIconButton = styled(Grid)`
  display: flex;
  justify-content: flex-end;

  .MuiIconButton-root {
    color: ${({ theme }) => theme.colours.primary} !important;
  }

  svg {
    width: 1.5rem !important;
  }
`;

export { StyledSubTitle, StyledIconButton };
