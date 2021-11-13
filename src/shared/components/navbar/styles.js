// libraries
import styled from "styled-components";

// external components
import Drawer from "@mui/material/Drawer";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const StyledDrawer = styled(Drawer)`
  width: 55px;
  flex-shrink: 0;
  white-space: nowrap;
  overflow-x: hidden;

  &:hover {
    width: 200px;
    transition: width 0.5s cubic-bezier(0.64, 0.11, 0.38, 0.95);
  }

  &:not(:hover) {
    transition: width 0.5s cubic-bezier(0.64, 0.11, 0.38, 0.95);
  }
`;

const StyledPaper = styled(Paper)`
  width: 55px;
  overflow-x: hidden;
  border-radius: 0px;
  padding-top: 45px;

  &:hover {
    width: 200px;
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
  width: 70;
  overflow: hidden;
  padding-top: 30;
  padding-bottom: 0;

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
