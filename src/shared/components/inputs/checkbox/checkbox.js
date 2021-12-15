// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { Controller } from "react-hook-form";

// external components
import FormControl from "@mui/material/FormControl";

// styled components
import { StyledLabel, StyledCheckbox } from "./styles";

const InputCheckbox = ({ label, name, control, icon: Icon, iconClass }) => {
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
            icon={<Icon />}
            checkedIcon={<Icon />}
            checked={field.value}
            className={iconClass}
            {...field}
          />
        )}
      />
    </FormControl>
  );
};

InputCheckbox.defaultProps = {
  label: "",
  iconClass: ""
};

InputCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  control: PropTypes.any.isRequired,
  icon: PropTypes.any,
  iconClass: PropTypes.string
};

export default InputCheckbox;
