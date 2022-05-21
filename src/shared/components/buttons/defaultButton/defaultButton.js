// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledDefaultButton } from "./styles";

const DefaultButton = ({ text, icon, type, variant, action }) => {
  return (
    <StyledDefaultButton type={type} className={variant} onClick={action}>
      {icon || text}
    </StyledDefaultButton>
  );
};

DefaultButton.defaultProps = {
  type: "button",
  variant: "",
  action: () => {}
};

DefaultButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.any,
  type: PropTypes.string,
  variant: PropTypes.string,
  action: PropTypes.func
};

export default DefaultButton;
