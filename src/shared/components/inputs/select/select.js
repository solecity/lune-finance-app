// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { Controller } from "react-hook-form";

// external components
import Select from "@mui/material/Select";

// styled components
import { StyledFormControl, StyledSelect, StyledLabel } from "./styles";

const InputSelect = ({ label, name, control, isRequired, children }) => {
  return (
    <StyledFormControl fullWidth size="small" required={isRequired}>
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
    </StyledFormControl>
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
