// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { Controller } from "react-hook-form";

// external components
import FormControl from "@mui/material/FormControl";

// styled components
import { StyledLabel, StyledCheckbox } from "./styles";

const InputCheckbox = ({ label, name, control }) => {
  return (
    <FormControl fullWidth size="small">
      <StyledLabel>{label}</StyledLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <StyledCheckbox
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
