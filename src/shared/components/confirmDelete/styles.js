// libraries
import styled from "styled-components";
import { alpha } from "@mui/material/styles";

const StyledOverlay = styled.div`
  &.overlay {
    background-color: ${({ theme }) => alpha(theme.colours.black, 0.35)};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledDialog = styled.dialog`
  background-color: ${({ theme }) => theme.colours.backgroundPaper};
  padding: ${({ theme }) => theme.spacing.s8} ${({ theme }) => theme.spacing.s7};
  box-shadow: ${({ theme }) => theme.shadows.base};
  border: none;
`;

const StyledText = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.s6}; 0;
  font-size: ${({ theme }) => theme.fontSize.textLarge};
  font-weight: ${({ theme }) => theme.fontWeight.base};
  line-height: ${({ theme }) => theme.lineHeight.h4};
  letter-spacing: 1.2px;
`;

const StyledButtons = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: flex-end;
`;

export { StyledOverlay, StyledDialog, StyledText, StyledButtons };
