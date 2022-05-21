// libraries
import styled from "styled-components";

// external components
import TextField from "@mui/material/TextField";

const StyledInput = styled(TextField)`
  background-color: ${({ theme }) => theme.colours.backgroundPaper};
  height: ${({ theme }) => theme.spacing.s10};
  box-shadow: ${({ theme }) => theme.shadows.inner};
  border: none;
  font-family: ${({ theme }) => theme.font.base};
  line-height: ${({ theme }) => theme.lineHeight.h4};

  .MuiInputBase-input:focus {
    box-shadow: ${({ theme }) => theme.shadows.innerFocus};
  }

  .MuiInputBase-root {
    padding-right: 0;
  }

  .MuiOutlinedInput-input {
    height: ${({ theme }) => theme.spacing.s7};
    padding: ${({ theme }) => theme.spacing.s3}
      ${({ theme }) => theme.spacing.s5};
  }

  .MuiOutlinedInput-notchedOutline {
    padding: 0;
    border: none;
  }

  .MuiInputLabel-root {
    transform: ${({ theme }) =>
      `translate(${theme.spacing.s4}, ${theme.spacing.s4})`};
    color: ${({ theme }) => theme.colours.textTertiary};
    font-size: ${({ theme }) => theme.fontSize.textMedium};
    line-height: ${({ theme }) => theme.lineHeight.h4};
    letter-spacing: ${({ theme }) => theme.letterSpacing.ls3};
  }

  .MuiInputLabel-root.Mui-focused {
    color: ${({ theme }) => theme.colours.primaryDark};
    font-size: ${({ theme }) => theme.fontSize.textSmall};
  }

  .MuiInputLabel-shrink {
    transform: ${({ theme }) =>
      `translate(${theme.spacing.s2}, -${theme.spacing.s7})`} !important;
    color: ${({ theme }) => theme.colours.textTertiary} !important;
    font-size: ${({ theme }) => theme.fontSize.textSmall} !important;
  }
`;

const StyledInputIcon = styled(StyledInput)`
  background-color: ${({ theme }) => theme.colours.primaryLight};
  box-shadow: none;

  .MuiInputBase-input {
    background-color: ${({ theme }) => theme.colours.backgroundPaper};
    box-shadow: ${({ theme }) => theme.shadows.inner};
  }

  .MuiInputAdornment-root {
    width: ${({ theme }) => theme.spacing.s11};
    margin-left: 0;
    display: flex;
    justify-content: center;
  }
`;

export { StyledInput, StyledInputIcon };
