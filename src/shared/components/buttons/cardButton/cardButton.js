// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledCardButton, StyledSmallCardButton } from "./styles";

const CardButton = ({ isSmall, icon, action }) => {
  return (
    <>
      {isSmall ? (
        <StyledSmallCardButton type="button" colour={colour} onClick={action}>
          {icon}
        </StyledSmallCardButton>
      ) : (
        <StyledCardButton type="button" onClick={action}>
          {icon}
        </StyledCardButton>
      )}
    </>
  );
};

CardButton.defaultProps = {
  isSmall: false,
  variant: ""
};

CardButton.propTypes = {
  isSmall: PropTypes.bool,
  icon: PropTypes.any,
  action: PropTypes.func.isRequired
};

export default CardButton;
