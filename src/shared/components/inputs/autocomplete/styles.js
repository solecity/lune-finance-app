// libraries
import styled from "styled-components";

// external components
import { autocompleteClasses } from "@mui/material/Autocomplete";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

// styled components
import { StyledTextField } from "../textField/styles";

const StyledInput = styled(StyledTextField)(() => ({
  [`.${autocompleteClasses.input}`]: {
    height: "36px",
    padding: "0 0.75rem !important"
  },

  [`.${outlinedInputClasses.root}`]: {
    padding: "0 !important"
  }
}));

export { StyledInput };
