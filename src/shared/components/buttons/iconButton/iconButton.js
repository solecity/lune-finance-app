// base
import React from "react";
import PropTypes from "prop-types";

// external components
import Tooltip from "@mui/material/Tooltip";

// styled components
import { StyledIconButton } from "./styles";

const IconButton = ({ tooltip, icon, action }) => {
  return (
    <Tooltip title={tooltip}>
      <StyledIconButton size="small" color="primary" onClick={action}>
        {icon}
      </StyledIconButton>
    </Tooltip>
  );
};

IconButton.defaultProps = {
  tooltip: ""
};

IconButton.propTypes = {
  tooltip: PropTypes.string,
  icon: PropTypes.any,
  action: PropTypes.func.isRequired
};

export default IconButton;
