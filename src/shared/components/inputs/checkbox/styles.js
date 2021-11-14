// libraries
import styled from "styled-components";

// external components
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import { CreditCard } from "@styled-icons/boxicons-regular/CreditCard";

const StyledLabel = styled.label`
  margin-left: 5px;
  font-size: 14px;
`;

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  [`&.${checkboxClasses.root}`]: {
    color: theme.colours.grey
  },

  "&.Mui-checked": {
    color: `${theme.colours.green} !important`
  }
}));

const StyledIcon = styled(CreditCard)`
  width: 1.5rem;
`;

export { StyledLabel, StyledCheckbox, StyledIcon };
