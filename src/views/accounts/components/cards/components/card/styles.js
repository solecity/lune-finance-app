// base
import React from "react";

// libraries
import styled from "styled-components";

// external components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CreditCard } from "@styled-icons/boxicons-regular/CreditCard";

const StyledCard = styled(Card)`
  margin-top: 2px;
`;

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

const StyledActions = styled(Grid)`
  background-color: ${({ theme }) => theme.colours.secondary};
`;

const StyledEditButton = styled(Grid)`
  border-right: 1px solid ${({ theme }) => theme.colours.white};
  text-align: center;
`;

const StyledDeleteButton = styled(Grid)`
  border-left: 1px solid ${({ theme }) => theme.colours.white};
  text-align: center;
`;

export {
  StyledCard,
  StyledContent,
  StyledGrid,
  StyledInfo,
  StyledCardIcon,
  StyledActions,
  StyledEditButton,
  StyledDeleteButton
};
