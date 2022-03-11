// libraries
import styled from "styled-components";

// styled components
import { StyledButton } from "styles/default";

const StyledTab = styled(StyledButton)`
  width: ${({ theme }) => theme.spacing.s28};
  margin-right: ${({ theme }) => theme.spacing.s4};
  text-transform: capitalize;

  &:last-child {
    margin-right: 0;
  }
`;

export { StyledTab };
