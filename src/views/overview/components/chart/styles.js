// libraries
import styled from "styled-components";

// external components
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const StyledPaper = styled(Paper)`
  height: 450px;
  margin: 10px 0 !important;
`;

const StyleGrid = styled(Grid)`
  height: 400px;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled(Grid)`
  padding: 5px 0;
  justify-content: center;
`;

export { StyledPaper, StyleGrid, StyledTitle };
