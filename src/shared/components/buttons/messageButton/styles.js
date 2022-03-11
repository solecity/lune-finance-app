// libraries
import styled from "styled-components";

// styled components
import { StyledButton } from "styles/default";

const StyledMessageButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colours.secondaryDark};
  width: ${({ theme }) => theme.spacing.s18};
  margin-left: ${({ theme }) => theme.spacing.s5};
  box-shadow: none;
  font-size: ${({ theme }) => theme.fontSize.textSmall};
  font-weight: ${({ theme }) => theme.fontWeight.base};
  line-height: ${({ theme }) => theme.lineHeight.base};
  letter-spacing: 0.8px;

  &:hover {
    background-color: ${({ theme }) => theme.colours.secondaryLight};
  }

  &.secondary {
    background-color: ${({ theme }) => theme.colours.actionActive};

    &:hover {
      background-color: ${({ theme }) => theme.colours.actionHover};
    }
  }
`;

export { StyledMessageButton };
