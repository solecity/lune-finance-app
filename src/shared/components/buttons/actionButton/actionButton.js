// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledActionButton, StyledCardButton } from "./styles";

const ActionButton = ({ isAction, variant, text, action }) => {
  return (
    <>
      {isAction ? (
        <StyledActionButton variant={variant} onClick={action}>
          {text}
        </StyledActionButton>
      ) : (
        <StyledCardButton variant={variant} onClick={action}>
          {text}
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
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default ActionButton;
