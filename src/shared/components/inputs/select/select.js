// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { Controller } from "react-hook-form";

// external components
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";

// styled components
import { StyledSelect, StyledLabel } from "./styles";

const InputSelect = ({ label, name, control, error, isRequired, children }) => {
  return (
    <FormControl fullWidth size="small" required={isRequired}>
      <StyledLabel>{label}</StyledLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            label={label}
            variant="outlined"
            input={<StyledSelect />}
            value={field.value}
            {...field}
          >
            {children}
          </Select>
        )}
      />
      <FormHelperText className="error">{error}</FormHelperText>
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
  error: PropTypes.string,
  isRequired: PropTypes.bool,
  children: PropTypes.any
};

export default InputSelect;
