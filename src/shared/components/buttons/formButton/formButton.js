// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledButton, StyledIconButton } from "./styles";

const FormButton = ({ text, icon: Icon, isIcon }) => {
  return (
    <>
      {isIcon ? (
        <StyledIconButton variant="contained" type="submit">
          <Icon />
        </StyledIconButton>
      ) : (
        <StyledButton variant="contained" type="submit">
          {text}
        </StyledButton>
      )}
    </>
  );
};

FormButton.defaultProps = {
  text: "Save",
  isIcon: false
};

FormButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.any,
  isIcon: PropTypes.bool
};

export default FormButton;
