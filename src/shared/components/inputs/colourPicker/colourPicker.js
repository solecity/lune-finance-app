// base
import React from "react";
import PropTypes from "prop-types";

// external components
import { ChromePicker } from "react-color";

// styled components
import { StyledPopOver, StyledCover } from "./styles";

// constants
import { CONSTANTS } from "constants/general";

const ColourPicker = ({ colour, setColour, handleColour }) => {
  const handleChange = (colour) => setColour(colour.hex);

  return (
    <StyledPopOver>
      <StyledCover onClick={handleColour} />
      <ChromePicker color={colour} onChange={handleChange} disableAlpha />
    </StyledPopOver>
  );
};

ColourPicker.defaultProps = {
  colour: CONSTANTS.INITIAL_ACCOUNT_TYPE
};

ColourPicker.propTypes = {
  colour: PropTypes.string.isRequired,
  setColour: PropTypes.func.isRequired,
  handleColour: PropTypes.func.isRequired
};

export default ColourPicker;
