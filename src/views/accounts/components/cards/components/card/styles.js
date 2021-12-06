// base
import React from "react";

// libraries
import styled from "styled-components";

// external components
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import { CreditCard } from "@styled-icons/boxicons-regular/CreditCard";

const StyledContent = styled(CardContent)`
  padding: 0 !important;
`;

const StyledGrid = styled(Grid)`
  padding: 16px;
`;

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
    color: ${({ theme }) => theme.colours.disabled};
  }
`;

const StyledCardIcon = styled(({ bool }) =>
  bool ? (
    <StyledCreditCard className="green" />
  ) : (
    <StyledCreditCard className="disabled" />
  )
)``;

const StyledButtons = styled(Grid)`
  align-items: center;
  text-align: center;
`;

const StyledAmount = styled(Grid)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export {
  StyledContent,
  StyledGrid,
  StyledInfo,
  StyledCardIcon,
  StyledButtons,
  StyledAmount
};
