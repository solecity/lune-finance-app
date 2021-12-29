// libraries
import styled from "styled-components";

// external components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const StyledCard = styled(Card)`
  padding: 10px;
  text-align: center;
`;

const StyledTitle = styled(Grid)`
  padding: 6px !important;
`;

const StyledTypography = styled(Typography)`
  margin: 6px 0 !important;
`;

const StyledGrid = styled(Grid)`
  border-right: 1px solid ${({ theme }) => theme.colours.divider};
`;

export { StyledCard, StyledTitle, StyledTypography, StyledGrid };
