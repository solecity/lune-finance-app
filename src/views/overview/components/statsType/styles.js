// libraries
import styled from "styled-components";

const StyledStats = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.s10};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.s8};

  // TODO screen size
  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 375px) {
  }
`;

export { StyledStats };
