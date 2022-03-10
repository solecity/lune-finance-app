// libraries
import styled from "styled-components";

// external components
import SimpleBar from "simplebar-react";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  overflow: hidden;
`;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  overflow: hidden;
`;

const StyledScroll = styled(SimpleBar)`
  width: 100%;
  max-height: calc(100vh - 10px);
`;

export { StyledContainer, StyledWrapper, StyledScroll };
