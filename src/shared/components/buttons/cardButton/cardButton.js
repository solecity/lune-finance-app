// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledButton } from "./styles";

const CardButton = ({ variant, text, action }) => {
  return (
    <StyledButton variant={variant} onClick={action}>
      {text}
    </StyledButton>
  );
};

CardButton.defaultProps = {
  variant: "contained"
};

CardButton.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
  action: PropTypes.func.isRequired
};

export default CardButton;
