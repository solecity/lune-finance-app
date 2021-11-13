// libraries
import styled from "styled-components";

// external components
import Checkbox from "@mui/material/Checkbox";

const StyledLabel = styled.label`
  margin-left: 5px;
  font-size: 14px;
`;

const StyledCheckbox = styled(Checkbox)`
  &.Mui-checked {
    color: ${({ theme }) => theme.colors.secondary} !important;
  }
`;

export { StyledLabel, StyledCheckbox };
