// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { Controller } from "react-hook-form";

// external components
import FormControl from "@mui/material/FormControl";

// styled components
import { StyledCheckbox, StyledInput } from "./styles";

const InputCheckbox = ({ control, label, name }) => {
  return (
    <FormControl>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <StyledCheckbox>
            <StyledInput
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={field.value}
            />
            {label}
          </StyledCheckbox>
        )}
      />
    </FormControl>
  );
};

InputCheckbox.defaultProps = {
  label: ""
};

InputCheckbox.propTypes = {
  control: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default InputCheckbox;
