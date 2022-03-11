// libraries
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 400px;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.s1};
`;

const StyledText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.textLarge};
  line-height: ${({ theme }) => theme.lineHeight.h4};
  letter-spacing: 0.5px;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colours.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.textLarge};
  line-height: ${({ theme }) => theme.lineHeight.h4};
  text-decoration: none;
  letter-spacing: 0.5px;
`;

const StyledPasswordLink = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.s5};
  display: flex;
  justify-content: flex-end;
`;

export { StyledContainer, StyledText, StyledLink, StyledPasswordLink };
