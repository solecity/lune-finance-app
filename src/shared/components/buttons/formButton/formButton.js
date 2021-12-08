// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledButton } from "./styles";

const FormButton = ({ type, text }) => {
  return (
    <StyledButton variant="contained" type={type}>
      {text}
    </StyledButton>
  );
};

FormButton.defaultProps = {
  type: "submit"
};

FormButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
};

export default FormButton;
