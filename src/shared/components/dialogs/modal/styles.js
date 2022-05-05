// libraries
import styled from "styled-components";

const StyledTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.s6} 0;
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: ${({ theme }) => theme.fontWeight.base};
  line-height: ${({ theme }) => theme.lineHeight.h3};
  letter-spacing: ${({ theme }) => theme.letterSpacing.ls2};
`;

export { StyledTitle };
