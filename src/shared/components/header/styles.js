// libraries
import styled from "styled-components";

const StyleTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.spacing.s8};
  font-weight: ${({ theme }) => theme.fontWeight.base};
  line-height: ${({ theme }) => theme.spacing.s10};
  letter-spacing: ${({ theme }) => theme.letterSpacing.ls3};
`;

export { StyleTitle };
