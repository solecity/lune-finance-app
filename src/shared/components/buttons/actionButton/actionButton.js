// base
import React from "react";
import PropTypes from "prop-types";

// external components
import Tooltip from "@mui/material/Tooltip";

// styled components
import { StyledIconButton, StyledButton } from "./styles";

const ActionButton = ({ tooltip, hasIcon, icon, text, action }) => {
  return (
    <Tooltip title={tooltip}>
      {hasIcon ? (
        <StyledIconButton size="small" onClick={action}>
          {icon}
        </StyledIconButton>
      ) : (
        <StyledButton variant="contained" onClick={action}>
          {text}
        </StyledButton>
      )}
    </Tooltip>
  );
};

ActionButton.defaultProps = {
  hasIcon: false,
  tooltip: "",
  text: ""
};

ActionButton.propTypes = {
  tooltip: PropTypes.string,
  hasIcon: PropTypes.bool,
  icon: PropTypes.any,
  text: PropTypes.string,
  action: PropTypes.func.isRequired
};

export default ActionButton;
