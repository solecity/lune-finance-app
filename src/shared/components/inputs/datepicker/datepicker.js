// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { Controller } from "react-hook-form";

// external components
import DatePicker from "@mui/lab/DatePicker";

// styled components
import { StyledDatePicker, StyledTextField } from "./styles";

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
    <StyledDatePicker fullWidth size="small" required={isRequired}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            label={label}
            error={error}
            helperText={helperText}
            inputFormat={DATE_FORMAT}
            renderInput={(params) => <StyledTextField {...params} />}
            {...field}
          />
        )}
      />
    </StyledDatePicker>
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
