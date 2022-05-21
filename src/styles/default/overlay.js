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
    z-index: 999999;
  }
`;

export { StyledOverlay };
