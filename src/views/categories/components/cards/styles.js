// libraries
import styled from "styled-components";

// external components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import SimpleBar from "simplebar-react";

const StyledBoard = styled(Grid)`
  margin-top: 20px !important;
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
  height: calc(100vh - 265px);
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
  max-height: calc(100vh - 380px);
  width: auto;

  .simplebar-scrollbar::before {
    background-color: ${({ theme }) => theme.colours.primary};
  }
`;

const StyledScrollWrapper = styled.div`
  display: flex;
  width: auto;
`;

const StyledColumn = styled(Grid)`
  min-width: 300px;
  margin-right: 10px !important;
`;

const StyledColumnButton = styled(Card)`
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
`;

export {
  StyledBoard,
  StyledGrid,
  StyledScroll,
  StyledInnerScroll,
  StyledScrollWrapper,
  StyledColumn,
  StyledColumnButton
};
