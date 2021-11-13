// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { Controller } from "react-hook-form";

// external components
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const InputSelect = ({ label, name, control, isRequired, children }) => {
  return (
    <FormControl fullWidth size="small" required={isRequired}>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            label={label}
            variant="outlined"
            value={field.value}
            {...field}
          >
            {children}
          </Select>
        )}
      />
    </FormControl>
  );
};

InputSelect.defaultProps = {
  label: "",
  isRequired: false
};

InputSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
  isRequired: PropTypes.bool,
  children: PropTypes.any
};

export default InputSelect;
