// libraries
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 425px) {
    margin: 0 ${({ theme }) => theme.spacing.s5};
  }
`;

const StyledTitle = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.s7};
  font-size: 32px;
  color: ${({ theme }) => theme.colours.primary};
`;

export { StyledContainer, StyledTitle };
