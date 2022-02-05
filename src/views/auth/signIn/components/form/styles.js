// libraries
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 400px;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.s10};
`;

export { StyledContainer };
