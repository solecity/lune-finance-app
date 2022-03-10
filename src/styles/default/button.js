// libraries
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colours.primaryDark};
  height: ${({ theme }) => theme.height.base};
  width: 100%;
  border: none;
  color: ${({ theme }) => theme.colours.textAltPrimary};
  box-shadow: ${({ theme }) => theme.shadows.base};
  font-family: "Roboto", sans-serif;
  font-size: ${({ theme }) => theme.font.textLarge};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.h4};
  letter-spacing: 1.2px;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => theme.colours.primaryMain};
  }

  &.selected {
    background-color: ${({ theme }) => theme.colours.backgroundDefault};
    box-shadow: ${({ theme }) => theme.shadows.inner};
    color: ${({ theme }) => theme.colours.textPrimary};
  }
`;

export { StyledButton };
