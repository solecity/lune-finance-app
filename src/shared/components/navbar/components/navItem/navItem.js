// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledList, StyledLink, StyledLabel } from "./styles";

const NavItem = ({ label, icon: Icon, href, navBarOpen }) => {
  const handleItem = () => {
    if (navBarOpen) {
      return (
        <StyledLink to={href}>
          <Icon />
          <StyledLabel>{label}</StyledLabel>
        </StyledLink>
      );
    } else {
      return (
        <StyledLink to={href}>
          <Icon />
        </StyledLink>
      );
    }
  };

  return <StyledList>{handleItem()}</StyledList>;
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired
};

export default NavItem;
