// base
import React from "react";
import PropTypes from "prop-types";

// styled components
//import { StyledCardButton } from "styles/default";
import {
  StyledDefaultButton,
  StyledCardButton,
  StyledSmallCardButton
} from "./styles";

const ActionButton = ({
  isAction,
  isSmall,
  text,
  icon,
  colour,
  variant,
  action
}) => {
  return (
    <>
      {isAction ? (
        <StyledDefaultButton type="button" className={variant} onClick={action}>
          {icon || text}
        </StyledDefaultButton>
      ) : (
        <StyledCardButton type="button" onClick={action}>
          {icon}
        </StyledCardButton>
      )}
    </>

    // TODO small card button

    // <>
    //isSmall ? (
    //     <StyledSmallCardButton type="button" colour={colour} onClick={action}>
    //       {icon}
    //     </StyledSmallCardButton>
    //   ) : (
    //     <StyledCardButton onClick={action}>
    //       {icon}
    //     </StyledCardButton>
    //   )}
    // </>
  );
};

ActionButton.defaultProps = {
  isAction: true,
  isSmall: false,
  variant: ""
};

ActionButton.propTypes = {
  isAction: PropTypes.bool,
  isSmall: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.any,
  colour: PropTypes.object,
  variant: PropTypes.string,
  action: PropTypes.func.isRequired
};

export default ActionButton;
