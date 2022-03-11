// libraries
import styled from "styled-components";

// external components
import TextField from "@mui/material/TextField";

const StyledInput = styled(TextField)`
  background-color: ${({ theme }) => theme.colours.backgroundPaper};
  height: ${({ theme }) => theme.height.medium};
  box-shadow: ${({ theme }) => theme.shadows.inner};
  border: none;
  font-family: ${({ theme }) => theme.font.base};
  line-height: ${({ theme }) => theme.lineHeight.h4}

  .MuiInputBase-input:focus {
    box-shadow: ${({ theme }) => theme.shadows.innerFocus};
  }

  .MuiOutlinedInput-input {
    padding: 8px 16px;
  }

  .MuiOutlinedInput-notchedOutline {
    padding: 0;
    border: none;
  }

  .MuiInputLabel-root {
    transform: translate(10px, 10px);
    color: ${({ theme }) => theme.colours.textTertiary};
    font-size: ${({ theme }) => theme.fontSize.textLarge};
  }

  .MuiInputLabel-root.Mui-focused {
    color: ${({ theme }) => theme.colours.primaryDark};
    font-size: ${({ theme }) => theme.fontSize.textMedium};
  }

  .MuiInputLabel-shrink {
    transform: translate(10px, -18px);
    color: ${({ theme }) => theme.colours.textTertiary};
    font-size: ${({ theme }) => theme.fontSize.textMedium};
  }
`;

export { StyledInput };
