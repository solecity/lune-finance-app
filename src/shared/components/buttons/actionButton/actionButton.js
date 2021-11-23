// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import {
  StyledActionButton,
  StyledCardButton,
  StyledSmallCardButton
} from "./styles";

const ActionButton = ({ isAction, isSmall, text, icon, colour, action }) => {
  return (
    <>
      {isAction ? (
        <StyledActionButton variant="contained" onClick={action}>
          {text}
        </StyledActionButton>
      ) : isSmall ? (
        <StyledSmallCardButton
          className="icon"
          variant="contained"
          colour={colour}
          onClick={action}
        >
          {icon}
        </StyledSmallCardButton>
      ) : (
        <StyledCardButton className="icon" variant="contained" onClick={action}>
          {icon}
        </StyledCardButton>
      )}
    </>
  );
};

ActionButton.defaultProps = {
  isAction: true,
  isSmall: false
};

ActionButton.propTypes = {
  isAction: PropTypes.bool,
  isSmall: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.any,
  colour: PropTypes.object,
  action: PropTypes.func.isRequired
};

export default ActionButton;
