// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { Link } from "react-router-dom";

// external components
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

const NavItem = ({ label, icon: Icon, href }) => {
  return (
    <ListItem button component={Link} to={href}>
      <ListItemIcon>{Icon && <Icon size="20" />}</ListItemIcon>
      <ListItemText>
        <span>{label}</span>
      </ListItemText>
    </ListItem>
  );
};

NavItem.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.any,
  href: PropTypes.string
};

export default NavItem;
