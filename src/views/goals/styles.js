// libraries
import styled from "styled-components";

// external components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const StyledContainer = styled(Container)`
  padding-bottom: 25px;
`;

const StyledTabs = styled(Grid)`
  margin-bottom: 20px;
`;

const StyledDivider = styled(Divider)`
  margin-bottom: 30px !important;
`;

export { StyledContainer, StyledTabs, StyledDivider };
