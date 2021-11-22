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
  &.green {
    color: ${({ theme }) => theme.colours.green};
  }

  &.red {
    color: ${({ theme }) => theme.colours.red};
  }

  &.blue {
    color: ${({ theme }) => theme.colours.blue};
  }

  &.label {
    color: ${({ theme }) => theme.colours.darkGrey};
  }
`;

export { StyleGrid, StyledCard, StyledTypography };
