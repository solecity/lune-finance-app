// libraries
import styled from "styled-components";

// styled components
import { StyledInput } from "styles/default";

const StyledInputIcon = styled(StyledInput)`
  background-color: ${({ theme }) => theme.colours.primaryLight};

  .MuiInputBase-input {
    background-color: ${({ theme }) => theme.colours.backgroundPaper};
    box-shadow: ${({ theme }) => theme.shadows.inner};
  }

  .MuiInputAdornment-root {
    margin-right: -${({ theme }) => theme.spacing.s2};
  }
`;

export { StyledInputIcon };
