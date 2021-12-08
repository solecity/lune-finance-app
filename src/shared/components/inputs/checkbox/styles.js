// libraries
import styled from "styled-components";

// external components
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import { CreditCard } from "@styled-icons/boxicons-regular/CreditCard";

const StyledLabel = styled.label`
  font-size: 14px;
`;

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  [`&.${checkboxClasses.root}`]: {
    color: theme.colours.disabled,

    "& .Mui-checked": {
      color: `${theme.colours.green} !important`
    }
  }
}));

const StyledIcon = styled(CreditCard)`
  width: 1.5rem;
`;

export { StyledLabel, StyledCheckbox, StyledIcon };
