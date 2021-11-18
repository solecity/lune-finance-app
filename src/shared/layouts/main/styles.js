// libraries
import styled from "styled-components";

// external components
import SimpleBar from "simplebar-react";

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
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

  .simplebar-scrollbar::before {
    background-color: ${({ theme }) => theme.colours.primary};
  }
`;

export { StyledContainer, StyledWrapper, StyledScroll };
