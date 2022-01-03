// libraries
import styled from "styled-components";

// external components
import IconButton from "@mui/material/IconButton";

const StyledActions = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 0 2rem;
`;

const StyledIcon = styled(IconButton)`
  width: 2.5rem;
`;

export { StyledActions, StyledIcon };
