// libraries
import styled from "styled-components";

const StyledList = styled.li`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.s4};
  padding: 0;
  list-style: none;

  &:hover {
    background-color: ${({ theme }) => theme.colours.primaryMain};
  }

  &:active {
    background-color: ${({ theme }) => theme.colours.primaryLight};
  }
`;

const StyledItem = styled.a`
  padding: ${({ theme }) => theme.spacing.s2};
  display: inline-flex;
  align-items: center;
  text-decoration: none;

  svg {
    height: ${({ theme }) => theme.spacing.s6};
    width: ${({ theme }) => theme.spacing.s6};
  }
`;

const StyledLabel = styled.span`
  margin-left: ${({ theme }) => theme.spacing.s4};
  color: ${({ theme }) => theme.colours.textAltPrimary};
  font-size: ${({ theme }) => theme.font.textMedium};
  line-height: ${({ theme }) => theme.lineHeight.base};
  letter-spacing: 0.8px;
`;

export { StyledList, StyledItem, StyledLabel };
