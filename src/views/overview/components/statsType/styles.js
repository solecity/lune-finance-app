// libraries
import styled from "styled-components";

// external components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const StyledGrid = styled(Grid)`
  padding: 10px 0;
`;

const StyledCard = styled(Card)`
  padding: 10px;
  text-align: center;
`;

const StyledTypography = styled(Typography)`
  margin: 6px 0 !important;

  &.green {
    color: ${({ theme }) => theme.colours.green};
  }

  &.red {
    color: ${({ theme }) => theme.colours.red};
  }

  &.yellow {
    color: ${({ theme }) => theme.colours.yellow};
  }

  &.blue {
    color: ${({ theme }) => theme.colours.blue};
  }

  &.label {
    margin: 0 0 0 2px !important;
    color: ${({ theme }) => theme.colours.label};
  }
`;

export { StyledGrid, StyledCard, StyledTypography };
