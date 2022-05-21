// libraries
import styled from "styled-components";

const StyledContainer = styled.div`
  width: ${({ theme }) => theme.spacing.s35};
  margin: ${({ theme }) => theme.spacing.s8} ${({ theme }) => theme.spacing.s7};
  display: grid;
  grid-template-columns: 1fr;
`;

const StyledInputs = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.s8};
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.s12};
`;

const StyledText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.textLarge};
  line-height: ${({ theme }) => theme.lineHeight.h4};
  letter-spacing: ${({ theme }) => theme.letterSpacing.ls5};
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colours.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.textLarge};
  line-height: ${({ theme }) => theme.lineHeight.h4};
  text-decoration: none;
  letter-spacing: ${({ theme }) => theme.letterSpacing.ls5};
`;

const StyledPasswordLink = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.s5};
  display: flex;
  justify-content: flex-end;
`;

export {
  StyledContainer,
  StyledInputs,
  StyledText,
  StyledLink,
  StyledPasswordLink
};
