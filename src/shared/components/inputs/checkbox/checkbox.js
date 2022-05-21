// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { Controller } from "react-hook-form";

// styled components
import { StyledCheckbox, StyledInput } from "./styles";

const InputCheckbox = ({ label, name, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <StyledCheckbox>
          <StyledInput
            id="checkbox"
            name="checkbox"
            type="checkbox"
            checked={field.value}
            {...field}
          />
          {label}
        </StyledCheckbox>
      )}
    />
  );
};

InputCheckbox.defaultProps = {
  label: ""
};

InputCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  control: PropTypes.any.isRequired
};

export default InputCheckbox;
