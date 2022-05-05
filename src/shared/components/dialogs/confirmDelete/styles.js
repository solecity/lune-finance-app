// libraries
import styled from "styled-components";

const StyledText = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.s6} 0;
  font-size: ${({ theme }) => theme.fontSize.textLarge};
  font-weight: ${({ theme }) => theme.fontWeight.base};
  line-height: ${({ theme }) => theme.lineHeight.h4};
  letter-spacing: ${({ theme }) => theme.letterSpacing.ls7};
`;

const StyledButtons = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: flex-end;
`;

export { StyledText, StyledButtons };
