// base
import React from "react";
import PropTypes from "prop-types";

// external components
import Tooltip from "@mui/material/Tooltip";

// styled components
import { StyledIconButton } from "./styles";

const TableButton = ({ tooltip, icon, action }) => {
  return (
    <Tooltip title={tooltip}>
      <StyledIconButton onClick={action}>{icon}</StyledIconButton>
    </Tooltip>
  );
};

TableButton.defaultProps = {
  tooltip: ""
};

TableButton.propTypes = {
  tooltip: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  action: PropTypes.func.isRequired
};

export default TableButton;
