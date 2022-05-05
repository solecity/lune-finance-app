// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { Controller } from "react-hook-form";

// external components
import FormControl from "@mui/material/FormControl";

// styled components
import { StyledInput } from "styles/default";

const InputTextField = ({ name, label, required, control, ...props }) => {
  return (
    <FormControl fullWidth>
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
    </FormControl>
  );
};

InputTextField.defaultProps = {
  label: "",
  required: false
};

InputTextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  control: PropTypes.any.isRequired
};

export default InputTextField;
