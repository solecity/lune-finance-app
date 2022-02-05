// libraries
import styled from "styled-components";
import { alpha } from "@mui/material/styles";

// external components
import TextField from "@mui/material/TextField";

const StyledTextField = styled(TextField)`
  background-color: ${({ theme }) => theme.colours.backgroundLight};
  height: ${({ theme }) => theme.input.height};
  width: 100%;
  padding: 0;
  box-shadow: ${({ theme }) =>
    `${theme.input.boxShadow} ${alpha(theme.colours.boxShadow, 0.25)}`};

  .MuiInputBase-input:focus {
    box-shadow: ${({ theme }) =>
      `${theme.input.boxShadow} ${alpha(theme.colours.primary, 0.5)}`};
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiInputLabel-root {
    transform: translate(10px, 10px) scale(0.9);
    color: ${({ theme }) => theme.input.labelColour};
  }

  .MuiInputLabel-root.Mui-focused {
    color: ${({ theme }) => theme.colours.primary};
  }

  .MuiInputLabel-shrink {
    transform: translate(10px, -18px) scale(0.75);
    color: ${({ theme }) => theme.input.labelColour};
  }
`;

export { StyledTextField };
