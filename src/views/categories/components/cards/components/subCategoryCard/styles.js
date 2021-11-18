// libraries
import styled from "styled-components";

// external components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

const StyledCard = styled(Card)`
  box-shadow: none !important;
`;

const StyledContent = styled(Grid)`
  box-shadow: inset 0px 2px 6px ${({ theme }) => theme.colours.boxShadow};
  border-bottom: 1px solid rgba(210, 220, 227, 0.5);
`;

const StyledTypography = styled(Grid)`
  padding-left: 25px !important;
  align-items: center;
`;

const StyledButton = styled(Grid)`
  border-bottom: 1px solid ${({ theme }) => theme.colours.accent};
`;

export { StyledCard, StyledContent, StyledTypography, StyledButton };
