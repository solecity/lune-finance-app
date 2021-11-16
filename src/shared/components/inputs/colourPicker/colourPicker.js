// base
import React from "react";
import PropTypes from "prop-types";

// external components
import Dialog from "@mui/material/Dialog";

// styled components
import { StyledPicker } from "./styles";

// constants
import { CONSTANTS } from "constants/general";

const InputColourPicker = ({ isOpen, handleColour, colour, setColour }) => {
  const handleChange = (colour) => setColour(colour.hex);

  return (
    <Dialog open={isOpen} onClose={handleColour}>
      <StyledPicker color={colour} onChange={handleChange} disableAlpha />
    </Dialog>
  );
};

InputColourPicker.defaultProps = {
  colour: CONSTANTS.INITIAL_ACCOUNT_TYPE
};

InputColourPicker.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleColour: PropTypes.func.isRequired,
  colour: PropTypes.string.isRequired,
  setColour: PropTypes.func.isRequired
};

export default InputColourPicker;
