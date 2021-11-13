// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { Controller } from "react-hook-form";

// external components
import FormControl from "@mui/material/FormControl";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";

// constants
import { DATE_FORMAT } from "constants/general";

const InputDatePicker = ({
  label,
  name,
  control,
  isRequired,
  error,
  helperText
}) => {
  return (
    <FormControl fullWidth size="small" required={isRequired}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            label={label}
            error={error}
            helperText={helperText}
            inputFormat={DATE_FORMAT}
            renderInput={(params) => <TextField {...params} />}
            {...field}
          />
        )}
      />
    </FormControl>
  );
};

InputDatePicker.defaultProps = {
  label: "",
  isRequired: false
};

InputDatePicker.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
  isRequired: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string
};

export default InputDatePicker;
