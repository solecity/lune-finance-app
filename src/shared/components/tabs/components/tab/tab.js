// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledTab } from "./styles";

const Tab = ({ tab, selected, text, action }) => {
  const isActive = tab === selected ? "selected" : null;

  return (
    <StyledTab onClick={action} className={isActive}>
      {text}
    </StyledTab>
  );
};

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default Tab;
