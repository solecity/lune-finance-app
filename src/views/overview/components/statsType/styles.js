// libraries
import styled from "styled-components";

// external components
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const StyledCard = styled(Card)`
  padding: 10px;
  text-align: center;
`;

const StyledTypography = styled(Typography)`
  margin: 6px 0 !important;

  &.green {
    color: ${({ theme }) => `${theme.colours.green} !important`};
  }

  &.red {
    color: ${({ theme }) => `${theme.colours.red} !important`};
  }

  &.yellow {
    color: ${({ theme }) => `${theme.colours.yellow} !important`};
  }

  &.blue {
    color: ${({ theme }) => `${theme.colours.blue} !important`};
  }

  &.label {
    margin: 0 0 0 2px !important;
    color: ${({ theme }) => `${theme.colours.label} !important`};
  }
`;

export { StyledCard, StyledTypography };
