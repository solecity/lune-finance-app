// base
import React from "react";
import PropTypes from "prop-types";

// external components
import Button from "@mui/material/Button";

const FormButton = ({ variant, text }) => {
  return (
    <Button variant={variant} type="submit">
      {text}
    </Button>
  );
};

FormButton.defaultProps = {
  variant: "contained"
};

FormButton.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string
};

export default FormButton;
