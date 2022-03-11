// libraries
import styled from "styled-components";

// external components
import SimpleBar from "simplebar-react";

const StyledList = styled.div`
  margin: ${({ theme }) => theme.spacing.s10} 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.s8};
`;

const StyledScroll = styled(SimpleBar)`
  max-height: calc(100vh - 32vh);
`;

export { StyledList, StyledScroll };
