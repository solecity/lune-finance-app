// libraries
import styled from "styled-components";

// external components
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const StyleCircularProgress = styled(CircularProgress)`
  color: ${({ theme }) => theme.colours.secondary} !important;
`;

const StyledPaper = styled(Paper)`
  height: 450px;
  margin: 10px 0 !important;
`;

const StyleGrid = styled(Grid)`
  height: 80%;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled(Grid)`
  padding: 5px 0;
  justify-content: center;
`;

export { StyleCircularProgress, StyledPaper, StyleGrid, StyledTitle };
