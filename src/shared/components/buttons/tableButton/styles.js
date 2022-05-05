// libraries
import styled from "styled-components";

const StyledIconButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  border: none;
  cursor: pointer;

  svg {
    height: ${({ theme }) => theme.spacing.s5};
    width: ${({ theme }) => theme.spacing.s5};
  }

  svg > path {
    stroke: ${({ theme }) => theme.colours.primaryLight};
  }
`;

export { StyledIconButton };
