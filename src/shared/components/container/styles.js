// libraries
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: ${({ theme }) => theme.spacing.s15}
    ${({ theme }) => theme.spacing.s18};

  @media screen and (max-width: 1080px) {
    margin: ${({ theme }) => theme.spacing.s10}
      ${({ theme }) => theme.spacing.s12};
  }
`;

export { StyledContainer };
