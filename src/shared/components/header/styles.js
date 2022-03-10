// libraries
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: ${({ theme }) => theme.spacing.s8} 0;
  padding: 0;
`;

const StyleTitle = styled.h2`
  font-size: ${({ theme }) => theme.spacing.s8};
  font-weight: ${({ theme }) => theme.fontWeight.base};
  line-height: ${({ theme }) => theme.spacing.s10};
  letter-spacing: 0.25px;
`;

export { StyledContainer, StyleTitle };
