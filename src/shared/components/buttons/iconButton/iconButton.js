// base
import React from "react";
import PropTypes from "prop-types";

// external components
import Tooltip from "@mui/material/Tooltip";
import { default as MuiIconButton } from "@mui/material/IconButton";

const IconButton = ({ tooltip, icon, action }) => {
  return (
    <Tooltip title={tooltip}>
      <MuiIconButton size="small" color="primary" onClick={action}>
        {icon}
      </MuiIconButton>
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
