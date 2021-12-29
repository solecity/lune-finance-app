// libraries
import styled from "styled-components";

// external components
import Grid from "@mui/material/Grid";
import SimpleBar from "simplebar-react";

const StyledBoard = styled(Grid)`
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
`;

const StyledScrollWrapper = styled.div`
  display: flex;
  width: auto;
`;

const StyledColumn = styled(Grid)`
  min-width: 300px;
  margin-right: 8px !important;
`;

export {
  StyledBoard,
  StyledGrid,
  StyledScroll,
  StyledScrollWrapper,
  StyledColumn
};
