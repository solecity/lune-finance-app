// base
import React from "react";

// libraries
import styled from "styled-components";

// external components
import Grid from "@mui/material/Grid";
import CardActionArea, {
  cardActionAreaClasses
} from "@mui/material/CardActionArea";
import { CreditCard } from "@styled-icons/boxicons-regular/CreditCard";

const StyledCardAction = styled(CardActionArea)(() => ({
  [`&.${cardActionAreaClasses.root}`]: {
    borderRadius: 0,
    minHeight: 100
  }
}));

const StyledInfo = styled(Grid)`
  padding-left: 15px;
`;

const StyledCreditCard = styled(CreditCard)`
  width: 22px;
  padding-left: 10px;
  &.green {
    color: ${({ theme }) => theme.colours.green};
  }
  &.disabled {
    color: ${({ theme }) => theme.colours.grey};
  }
`;

const StyledCardIcon = styled(({ bool }) =>
  bool ? (
    <StyledCreditCard className="green" />
  ) : (
    <StyledCreditCard className="disabled" />
  )
)``;

export { StyledCardAction, StyledInfo, StyledCardIcon };
