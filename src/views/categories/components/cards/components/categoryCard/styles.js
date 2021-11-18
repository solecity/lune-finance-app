// libraries
import styled from "styled-components";

// external components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

const StyledCard = styled(Card)`
  position: relative;
  z-index: 2;
  box-shadow: 0px 1px 4px ${({ theme }) => theme.colours.boxShadow} !important;
`;

const StyledContent = styled(Grid)`
  background-color: ${({ theme }) => theme.colours.inputBackground};
`;

const StyledGrid = styled(Grid)`
  padding-left: 10px !important;
  align-items: center;
`;

const StyledColour = styled(Grid)(({ colour }) => ({
  backgroundColor: `${colour} !important`
}));

const StyledButton = styled(Grid)`
  border-bottom: 1px solid ${({ theme }) => theme.colours.white};
`;

export { StyledCard, StyledContent, StyledGrid, StyledColour, StyledButton };
