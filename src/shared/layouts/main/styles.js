// libraries
import styled from "styled-components";

// external components
import SimpleBar from "simplebar-react";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
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
  max-height: 100vh;
`;

export { StyledContainer, StyledWrapper, StyledScroll };
