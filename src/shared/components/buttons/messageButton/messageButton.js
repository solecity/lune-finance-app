// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledContainer, StyledMessageButton } from "./styles";

const MessageButton = ({ className, text, action }) => {
  return (
    <StyledMessageButton className={className} type="submit" onClick={action}>
      {text}
    </StyledMessageButton>
  );
};

MessageButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default MessageButton;
