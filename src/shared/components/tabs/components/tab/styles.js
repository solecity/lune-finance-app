// libraries
import styled from "styled-components";

// styled components
import { StyledButton } from "styles/default";

const StyledTab = styled(StyledButton)`
  width: ${({ theme }) => theme.spacing.s28};

  &:first-child {
    margin-right: ${({ theme }) => theme.spacing.s4};
  }
`;

export { StyledTab };
