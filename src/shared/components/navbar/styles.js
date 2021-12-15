// libraries
import styled from "styled-components";
import { alpha } from "@mui/material/styles";

// external components
import Drawer from "@mui/material/Drawer";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const StyledDrawer = styled(Drawer)`
  width: 50px;
  flex-shrink: 0;
  white-space: nowrap;
  overflow-x: hidden;

  &:hover {
    width: 180px;
    transition: width 0.5s cubic-bezier(0.64, 0.11, 0.38, 0.95);
  }

  &:not(:hover) {
    transition: width 0.5s cubic-bezier(0.64, 0.11, 0.38, 0.95);
  }
`;

const StyledPaper = styled(Paper)`
  background-color: ${({ theme }) => theme.colours.accent} !important;
  width: 50px;
  padding-top: 45px;
  overflow-x: hidden;
  border-radius: 0px;
  border: none !important;
  box-shadow: 1px 0px 4px ${({ theme }) => alpha(theme.colours.boxShadow, 0.3)} !important;

  &:hover {
    width: 180px;
    transition: width 0.5s cubic-bezier(0.64, 0.11, 0.38, 0.95);
  }

  &:not(:hover) {
    transition: width 0.5s cubic-bezier(0.64, 0.11, 0.38, 0.95);
  }
`;

const StyledNavBarBox = styled(Box)`
  min-height: calc(100vh - 22vh);
`;

const StyledMenuList = styled(Box)`
  overflow: hidden;
  padding-top: 30px;

  &:hover {
    overflow: visible;
  }
`;

const StyledMenuBox = styled(Box)`
  min-height: calc(100vh - 22vh);
`;

export {
  StyledDrawer,
  StyledPaper,
  StyledNavBarBox,
  StyledMenuList,
  StyledMenuBox
};
