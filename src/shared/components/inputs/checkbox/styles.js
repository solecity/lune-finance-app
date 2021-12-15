// libraries
import styled from "styled-components";

// external components
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";

const StyledLabel = styled.label`
  font-size: 14px;
`;

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  [`&.${checkboxClasses.root}`]: {
    color: theme.colours.disabled,
    width: "2.5rem",

    "&.Mui-checked": {
      "&.green": {
        color: `${theme.colours.green} !important`
      },

      "&.yellow": {
        color: `${theme.colours.yellow} !important`
      }
    }
  }
}));

export { StyledLabel, StyledCheckbox };
