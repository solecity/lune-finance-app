// libraries
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colours.backgroundPaper};
  height: 460px;
  padding: ${({ theme }) => theme.spacing.s6} 0;
  box-shadow: ${({ theme }) => theme.shadows.base};
  text-align: center;
`;

const StyledTitle = styled.h6`
  margin: 0;
  font-size: ${({ theme }) => theme.font.h4};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.h4};
  letter-spacing: 0.15px;
`;

export { StyledCard, StyledTitle };
