// libraries
import styled from "styled-components";
import { alpha } from "@mui/material/styles";

// external components
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";

const StyledSelect = styled(InputBase)`
  background-color: ${({ theme }) => theme.colours.backgroundPaper};
  height: ${({ theme }) => theme.height.medium};
  width: ${({ theme }) => theme.spacing.s32};
  padding-left: ${({ theme }) => theme.spacing.s4};
  box-shadow: ${({ theme }) => theme.shadows.inner};
  border: none;
  color: ${({ theme }) => theme.colours.textTertiary};
  font-size: ${({ theme }) => theme.fontSize.textLarge};
  line-height: ${({ theme }) => theme.lineHeight.h4};
  letter-spacing: 0.5px;

  &.Mui-focused {
    box-shadow: ${({ theme }) => theme.shadows.innerFocus};
  }
`;

const StyledLabel = styled(InputLabel)`
  transform: translate(12px, 6px) !important;

  &.Mui-focused,
  &.MuiInputLabel-shrink {
    transform: translate(6px, -18px) !important;
    font-size: ${({ theme }) => theme.fontSize.textMedium} !important;
  }

  &.Mui-focused {
    color: ${({ theme }) => theme.colours.primaryDark} !important;
  }

  &.MuiInputLabel-shrink {
    color: ${({ theme }) => theme.colours.textTertiary};
  }
`;

export { StyledSelect, StyledLabel };
