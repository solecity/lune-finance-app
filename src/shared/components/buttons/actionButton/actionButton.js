// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledActionButton, StyledCardButton } from "./styles";

const ActionButton = ({ isAction, text, icon, action }) => {
  return (
    <>
      {isAction ? (
        <StyledActionButton variant="contained" onClick={action}>
          {text}
        </StyledActionButton>
      ) : (
        <StyledCardButton variant="contained" onClick={action}>
          {icon}
        </StyledCardButton>
      )}
    </>
  );
};

ActionButton.defaultProps = {
  isAction: true
};

ActionButton.propTypes = {
  isAction: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.any,
  action: PropTypes.func.isRequired
};

export default ActionButton;
