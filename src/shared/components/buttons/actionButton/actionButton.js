// base
import React from "react";
import PropTypes from "prop-types";

// external components
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const ActionButton = ({ tooltip, hasIcon, icon, text, action }) => {
  return (
    <Tooltip title={tooltip}>
      {hasIcon ? (
        <IconButton size="small" onClick={action}>
          {icon}
        </IconButton>
      ) : (
        <Button variant="contained" onClick={action}>
          {text}
        </Button>
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
