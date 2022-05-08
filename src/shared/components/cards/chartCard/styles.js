// libraries
import styled from "styled-components";

const StyledContent = styled.div`
  padding: ${({ theme }) => theme.spacing.s10}
    ${({ theme }) => theme.spacing.s13};
  text-align: center;
`;

const StyledTitle = styled.h6`
  margin: 0;
  padding-bottom: ${({ theme }) => theme.spacing.s6};
  font-size: ${({ theme }) => theme.fontSize.h4};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.h4};
  letter-spacing: ${({ theme }) => theme.letterSpacing.ls2};
`;

export { StyledContent, StyledTitle };
