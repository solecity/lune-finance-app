// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { Controller } from "react-hook-form";

// external components
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";

const InputCheckbox = ({ label, name, control }) => {
  return (
    <FormControl fullWidth size="small">
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Checkbox
            label={label}
            variant="outlined"
            size="small"
            checked={field.value}
            {...field}
          />
        )}
      />
    </FormControl>
  );
};

InputCheckbox.defaultProps = {
  label: ""
};

InputCheckbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any
};

export default InputCheckbox;
