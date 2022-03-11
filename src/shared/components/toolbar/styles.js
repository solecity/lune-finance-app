// libraries
import styled from "styled-components";

// external components
import Grid from "@mui/material/Grid";

const StyledToolbar = styled.div`
  margin-top: ${({ theme }) => theme.spacing.s8};
  display: inline-flex;
  gap: ${({ theme }) => theme.spacing.s7};
`;

const StyledGrid = styled(Grid)`
  justify-content: flex-end;
`;

export { StyledToolbar, StyledGrid };
