// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { Controller } from "react-hook-form";

// styled components
import { StyledInput } from "styles/default";

const InputTextField = ({ label, name, control, required, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <StyledInput
          size="small"
          label={`${label} ${required ? "*" : ""}`}
          fullWidth
          {...props}
          {...field}
        />
      )}
    />
  );
};

InputTextField.defaultProps = {
  label: "",
  required: false
};

InputTextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  control: PropTypes.any.isRequired,
  required: PropTypes.bool
};

export default InputTextField;
