// base
import React, { useState } from "react";

// external components
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";

// custom components
import { TabCategories, TabRecipients } from "./components";

// styled components
import { StyledTabsBar } from "./styles";

const TabsView = () => {
  const TabsIndex = [
    {
      value: 0,
      label: "Categories",
      renderOnCreate: true,
      component: <TabCategories />
    },
    {
      value: 1,
      label: "Recipients",
      component: <TabRecipients />
    }
  ];

  const [tab, setTab] = useState(0);

  const handleTabChange = (e, value) => setTab(value);

  return (
    <Grid>
      <StyledTabsBar value={tab} onChange={handleTabChange}>
        {TabsIndex.map((field, index) => (
          <Tab key={field.label} value={index} label={field.label} />
        ))}
      </StyledTabsBar>

      <Grid>{TabsIndex[tab].component}</Grid>
    </Grid>
  );
};

TabsView.propTypes = {};

export default TabsView;
