// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { Link } from "react-router-dom";

// external components
import ListItemText from "@mui/material/ListItemText";

// styled components
import { StyledItem, StyledIcon, StyledLabel } from "./styles";

const NavItem = ({ label, icon: Icon, href }) => {
  return (
    <StyledItem button component={Link} to={href}>
      <StyledIcon>
        <Icon size="20" />
      </StyledIcon>
      <ListItemText>
        <StyledLabel>{label}</StyledLabel>
      </ListItemText>
    </StyledItem>
  );
};

NavItem.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.any,
  href: PropTypes.string
};

export default NavItem;
