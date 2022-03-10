// base
import React from "react";
import PropTypes from "prop-types";

// custom components
import { Tab } from "./components";

// styled components
import { StyledTabs } from "./styles";

const Tabs = ({ tabs, setTab, selected, setSelected }) => {
  const handleTab = async (value) => {
    setTab(value);
    setSelected(value);
  };

  return (
    <StyledTabs>
      {tabs.map((tab, i) => (
        <Tab
          key={i}
          tab={tab}
          text={tab}
          selected={selected}
          action={() => handleTab(tab)}
        />
      ))}
    </StyledTabs>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired
};

export default Tabs;
