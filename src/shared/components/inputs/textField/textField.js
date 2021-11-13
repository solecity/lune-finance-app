// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { Controller } from "react-hook-form";

// external components
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

const InputTextField = ({
  name,
  control,
  isRequired,
  error,
  helperText,
  ...props
}) => {
  return (
    <FormControl fullWidth size="small" required={isRequired}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            error={error}
            helperText={helperText}
            variant="outlined"
            size="small"
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
  isRequired: false
};

InputTextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any,
  isRequired: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string
};

export default InputTextField;
