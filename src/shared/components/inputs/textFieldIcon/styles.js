// libraries
import styled from "styled-components";

// styled components
import { StyledInput } from "styles/default";

const StyledInputIcon = styled(StyledInput)`
  background-color: ${({ theme }) => theme.colours.primaryLight};
  box-shadow: none;

  .MuiInputBase-input {
    background-color: ${({ theme }) => theme.colours.backgroundPaper};
    box-shadow: ${({ theme }) => theme.shadows.inner};
  }

  .MuiInputAdornment-root {
    width: ${({ theme }) => theme.spacing.s10};
    margin-left: 0;
    display: flex;
    justify-content: center;
  }
`;

export { StyledInputIcon };
