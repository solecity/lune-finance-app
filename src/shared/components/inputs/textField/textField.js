// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { Controller } from "react-hook-form";

// styled components
import { StyledFormControl, StyledInput } from "styles/default";

const InputTextField = ({
  name,
  control,
  error,
  helperText,
  isRequired,
  ...props
}) => {
  return (
    <StyledFormControl required={isRequired} fullWidth>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <StyledInput
            size="small"
            fullWidth
            error={error}
            helperText={helperText}
            {...props}
            {...field}
          />
        )}
      />
    </StyledFormControl>
  );
};

InputTextField.defaultProps = {
  label: ""
};

InputTextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  isRequired: PropTypes.bool
};

export default InputTextField;
