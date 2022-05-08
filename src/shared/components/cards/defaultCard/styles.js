// libraries
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colours.backgroundPaper};
  box-shadow: ${({ theme }) => theme.shadows.base};
`;

export { StyledCard };
