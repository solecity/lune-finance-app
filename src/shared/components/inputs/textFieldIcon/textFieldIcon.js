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
  type,
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
            type={type}
            size="small"
            InputProps={{
              inputProps: inputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <Icon />
                </InputAdornment>
              )
            }}
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

InputTextFieldIcon.defaultProps = {
  type: "text"
};

InputTextFieldIcon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  icon: PropTypes.any.isRequired,
  inputProps: PropTypes.object,
  control: PropTypes.any.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string
};

export default InputTextFieldIcon;
