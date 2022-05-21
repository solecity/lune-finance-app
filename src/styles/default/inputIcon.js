// libraries
import styled from "styled-components";

// styled components
import { StyledInput } from "styles/default";

const StyledIconInput = styled(StyledInput)`
  .MuiInputBase-root {
    background-color: ${({ theme }) => theme.colours.primaryLight};
    padding-right: 0;
    border-radius: 0;
  }

  .MuiInputBase-input {
    background-color: ${({ theme }) => theme.colours.backgroundPaper};
    box-shadow: ${({ theme }) => theme.shadows.inner};
  }

  .MuiInputAdornment-root {
    margin: 10px;
    display: flex;
    justify-content: center;
  }
`;

export { StyledIconInput };
