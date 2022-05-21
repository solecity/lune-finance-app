// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { Controller } from "react-hook-form";

// external components
import InputAdornment from "@mui/material/InputAdornment";

// styled components
import { StyledInputIcon } from "styles/default";

const InputTextFieldIcon = ({
  label,
  name,
  control,
  required,
  icon: Icon,
  inputProps,
  ...props
}) => {
  return (
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
                {/* TODO add button  */}
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
  );
};

InputTextFieldIcon.defaultProps = {
  label: "",
  required: false
};

InputTextFieldIcon.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  control: PropTypes.any.isRequired,
  required: PropTypes.bool,
  icon: PropTypes.any.isRequired,
  inputProps: PropTypes.object
};

export default InputTextFieldIcon;
