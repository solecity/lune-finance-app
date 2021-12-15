// libraries
import styled from "styled-components";

// external components
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";

const StyledItem = styled(ListItem)`
  padding: 10px 0 10px 18px;
`;

const StyledIcon = styled(ListItemIcon)`
  min-width: 30px !important;
  margin-right: 5px;
  font-size: 18px;
  color: ${({ theme }) => `${theme.colours.white} !important`};
`;

const StyledLabel = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => `${theme.colours.white} !important`};
`;

export { StyledItem, StyledIcon, StyledLabel };
