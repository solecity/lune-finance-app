// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { Controller } from "react-hook-form";

// external components
import InputAdornment from "@mui/material/InputAdornment";

// styled components
import { StyledFormControl } from "styles/default";
import { StyledInputIcon } from "./styles";

const InputTextFieldIcon = ({
  name,
  label,
  required,
  icon: Icon,
  inputProps,
  control,
  error,
  helperText,
  ...props
}) => {
  return (
    <StyledFormControl fullWidth>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <StyledInputIcon
            size="small"
            label={`${label} ${required ? "*" : ""}`}
            InputProps={{
              inputProps: inputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <Icon />
                </InputAdornment>
              )
            }}
            fullWidth
            {...props}
            {...field}
          />
        )}
      />
    </StyledFormControl>
  );
};

InputTextFieldIcon.defaultProps = {
  label: "",
  required: false
};

InputTextFieldIcon.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  icon: PropTypes.any.isRequired,
  inputProps: PropTypes.object,
  control: PropTypes.any.isRequired
};

export default InputTextFieldIcon;
