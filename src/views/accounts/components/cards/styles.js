// libraries
import styled from "styled-components";

// external components
import SimpleBar from "simplebar-react";

const StyledScroll = styled(SimpleBar)`
  max-height: calc(100vh - 200px);

  .simplebar-scrollbar::before {
    background-color: ${({ theme }) => theme.colours.primary};
  }
`;

export { StyledScroll };
