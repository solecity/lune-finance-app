// libraries
import styled from "styled-components";

// external components
import Grid from "@mui/material/Grid";
import SimpleBar from "simplebar-react";

const StyledBoard = styled(Grid)`
  margin-top: 8px !important;
  margin-bottom: 8px !important;
  display: flex;
  flex-flow: row nowrap;
  overflow: auto;
`;

const StyledGrid = styled.div`
  width: 100%;
  display: flex;
`;

const StyledScroll = styled(SimpleBar)`
  width: 100%;

  .simplebar-wrapper {
    height: 100%;
  }

  .simplebar-content {
    height: 100%;
  }

  .simplebar-scrollbar::before {
    background-color: ${({ theme }) => theme.colours.primary};
  }
`;

const StyledInnerScroll = styled(SimpleBar)`
  max-height: 250px;

  .simplebar-scrollbar::before {
    background-color: ${({ theme }) => theme.colours.primary};
  }
`;

const StyledScrollWrapper = styled.div`
  display: flex;
`;

const StyledColumn = styled(Grid)`
  min-width: 300px;
  margin-right: 10px !important;
`;

export {
  StyledBoard,
  StyledGrid,
  StyledScroll,
  StyledInnerScroll,
  StyledScrollWrapper,
  StyledColumn
};
