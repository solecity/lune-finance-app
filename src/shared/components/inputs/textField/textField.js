// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { Controller } from "react-hook-form";

// external components
import FormControl from "@mui/material/FormControl";

// styled components
import { StyledTextField } from "./styles";

const InputTextField = ({ name, control, error, helperText, ...props }) => {
  return (
    <FormControl fullWidth size="small">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <StyledTextField
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
  label: ""
};

InputTextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any,
  error: PropTypes.bool,
  helperText: PropTypes.string
};

export default InputTextField;
