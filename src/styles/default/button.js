// libraries
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colours.primaryDark};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.s3} ${({ theme }) => theme.spacing.s5};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${({ theme }) => theme.colours.textAltPrimary};
  box-shadow: ${({ theme }) => theme.shadows.base};
  font-family: ${({ theme }) => theme.font.base};
  font-size: ${({ theme }) => theme.fontSize.textMedium};
  font-weight: ${({ theme }) => theme.fontWeight.base};
  line-height: ${({ theme }) => theme.lineHeight.h4};
  letter-spacing: ${({ theme }) => theme.letterSpacing.ls7};
  text-transform: uppercase;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${({ theme }) => theme.colours.primaryMain};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.selected {
    background-color: ${({ theme }) => theme.colours.backgroundDefault};
    box-shadow: ${({ theme }) => theme.shadows.inner};
    color: ${({ theme }) => theme.colours.textPrimary};
  }
`;

export { StyledButton };
