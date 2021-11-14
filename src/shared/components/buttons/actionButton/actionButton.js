// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledButton } from "./styles";

const ActionButton = ({ variant, text, action }) => {
  return (
    <StyledButton variant={variant} onClick={action}>
      {text}
    </StyledButton>
  );
};

ActionButton.defaultProps = {
  variant: "contained"
};

ActionButton.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
  action: PropTypes.func.isRequired
};

export default ActionButton;
