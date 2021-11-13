// libraries
import styled from "styled-components";

// external components
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const StyledContainer = styled(Container)`
  height: 100vh;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled(Typography)`
  margin-bottom: 16px;
`;

export { StyledContainer, StyledTitle };
