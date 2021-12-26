// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledButton } from "./styles";

// constants
import { DEFAULT } from "constants/general";

const ColourButton = ({ colour, action }) => {
  return <StyledButton variant="container" colour={colour} onClick={action} />;
};

ColourButton.defaultProps = {
  colour: DEFAULT.COLOUR
};

ColourButton.propTypes = {
  colour: PropTypes.string,
  action: PropTypes.func.isRequired
};

export default ColourButton;
