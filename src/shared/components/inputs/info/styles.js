// libraries
import styled from "styled-components";
import { alpha } from "@mui/material/styles";

// external components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const StyledLabel = styled(Typography)`
  padding-left: 8px;
  color: ${({ theme }) => alpha(theme.colours.mainText, 0.4)};
  font-size: 0.75rem !important;
`;

const StyledInput = styled(Grid)`
  height: 36px;
  padding-left: 8px;
  align-items: center;
  border: 1px solid ${({ theme }) => alpha(theme.colours.darkGrey, 0.4)};
`;

export { StyledLabel, StyledInput };
