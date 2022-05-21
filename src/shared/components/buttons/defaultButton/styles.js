// libraries
import styled from "styled-components";

// custom components
import { StyledButton } from "styles/default";

const StyledDefaultButton = styled(StyledButton)`
  width: auto;
  padding: ${({ theme }) => theme.spacing.s3};

  &.secondary {
    background-color: ${({ theme }) => theme.colours.actionActive};

    :hover {
      background-color: ${({ theme }) => theme.colours.actionHover};
    }
  }
`;

export { StyledDefaultButton };
