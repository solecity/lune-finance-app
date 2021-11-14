// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledActionButton, StyledCardButton } from "./styles";

const ActionButton = ({ isAction, variant, text, icon, action }) => {
  return (
    <>
      {isAction ? (
        <StyledActionButton variant={variant} onClick={action}>
          {text}
        </StyledActionButton>
      ) : (
        <StyledCardButton variant={variant} onClick={action}>
          {icon}
        </StyledCardButton>
      )}
    </>
  );
};

ActionButton.defaultProps = {
  isAction: true,
  variant: "contained"
};

ActionButton.propTypes = {
  isAction: PropTypes.bool,
  variant: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.any,
  action: PropTypes.func.isRequired
};

export default ActionButton;
