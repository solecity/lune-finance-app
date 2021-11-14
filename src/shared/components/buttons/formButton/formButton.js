// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledButton } from "./styles";

const FormButton = ({ variant, type, text }) => {
  return (
    <StyledButton variant={variant} type={type}>
      {text}
    </StyledButton>
  );
};

FormButton.defaultProps = {
  variant: "contained",
  type: "submit"
};

FormButton.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string
};

export default FormButton;
