// libraries
import styled from "styled-components";

// external components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const StyledLabel = styled(Typography)`
  padding: 0 0 2px 8px;
  color: ${({ theme }) => theme.colours.darkGrey};
  font-size: 0.8rem !important;
`;

const StyledInput = styled(Grid)`
  height: 36px;
  padding-left: 8px;
  align-items: center;
  border: 1px solid rgba(28, 28, 28, 0.4);
`;

export { StyledLabel, StyledInput };
