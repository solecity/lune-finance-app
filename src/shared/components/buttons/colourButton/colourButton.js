// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledButton } from "./styles";

// constants
import { CONSTANTS } from "constants/general";

const ColourButton = ({ colour, action }) => {
  return (
    <StyledButton
      variant="container"
      colour={colour}
      onClick={action}
    ></StyledButton>
  );
};

ColourButton.defaultProps = {
  colour: CONSTANTS.INITIAL_ACCOUNT_TYPE
};

ColourButton.propTypes = {
  colour: PropTypes.string,
  action: PropTypes.func.isRequired
};

export default ColourButton;