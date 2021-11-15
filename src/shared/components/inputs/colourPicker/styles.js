// libraries
import styled from "styled-components";

const StyledPopOver = styled.div`
  position: absolute;
  z-index: 1;
  top: 35px;
  right: 65px;
`;

const StyledCover = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export { StyledPopOver, StyledCover };
