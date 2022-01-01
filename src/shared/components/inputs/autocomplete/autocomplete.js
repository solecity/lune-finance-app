// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { Controller } from "react-hook-form";

// external components
import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";

// styled components
import { StyledInput } from "./styles";

const InputAutocomplete = ({
  label,
  name,
  control,
  error,
  isRequired,
  options
}) => {
  return (
    <FormControl fullWidth size="small" required={isRequired}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          console.log(field);

          return (
            <Autocomplete
              getOptionLabel={(option) => option.name}
              options={options}
              renderInput={(params) => (
                <StyledInput variant="outlined" label={label} {...params} />
              )}
              value={field.value}
            />
          );
        }}
      />
    </FormControl>
  );
};

InputAutocomplete.defaultProps = {
  label: "",
  isRequired: false
};

InputAutocomplete.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
  error: PropTypes.string,
  isRequired: PropTypes.bool,
  options: PropTypes.array
};

export default InputAutocomplete;
