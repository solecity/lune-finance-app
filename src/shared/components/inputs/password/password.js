// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { Controller } from "react-hook-form";

// external components
import InputAdornment from "@mui/material/InputAdornment";

// styled components
import { StyledFormControl } from "styles/default";
import { StyledPassword } from "./styles";

// icons
import { Eye } from "shared/icons";

const InputPassword = ({
  name,
  control,
  error,
  helperText,
  isRequired,
  ...props
}) => {
  return (
    <StyledFormControl required={isRequired} fullWidth>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <StyledPassword
            error={error}
            helperText={helperText}
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Eye size="20" />
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

InputPassword.defaultProps = {
  label: ""
};

InputPassword.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  isRequired: PropTypes.bool
};

export default InputPassword;
