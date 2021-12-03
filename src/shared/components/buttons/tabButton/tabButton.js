// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledButton } from "./styles";

const TabButton = ({ tab, selected, text, action }) => {
  const isActive = tab === selected ? "selected" : "button";
  return (
    <StyledButton variant="contained" onClick={action} className={isActive}>
      {text}
    </StyledButton>
  );
};

TabButton.propTypes = {
  tab: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default TabButton;
