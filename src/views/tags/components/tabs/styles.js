// libraries
import styled from "styled-components";

// external components
import Tabs from "@mui/material/Tabs";

const StyledTabsBar = styled(Tabs)`
  margin-bottom: 40px;
  box-shadow: 0px 2px 4px rgba(21, 41, 44, 0.3);

  .MuiTabs-indicator {
    background-color: transparent !important;
  }
`;

export { StyledTabsBar };
