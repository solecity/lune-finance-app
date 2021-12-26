// libraries
import styled from "styled-components";

// external components
import Container from "@mui/material/Container";
import SimpleBar from "simplebar-react";

const StyledContainer = styled(Container)`
  width: 550px !important;
  padding: 0 !important;
`;

const StyledScroll = styled(SimpleBar)`
  height: 200px;

  .simplebar-wrapper {
    height: 100%;
  }

  .simplebar-content {
    height: 100%;
  }
`;

export { StyledContainer, StyledScroll };
