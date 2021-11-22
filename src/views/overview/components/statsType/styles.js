// libraries
import styled from "styled-components";

// external components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const StyleGrid = styled(Grid)`
  padding: 10px 0;
`;

const StyledCard = styled(Card)`
  padding: 10px;
  text-align: center;
`;

const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.colours.secondary};
`;

export { StyleGrid, StyledCard, StyledTypography };
