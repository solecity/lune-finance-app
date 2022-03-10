// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledList, StyledItem, StyledLabel } from "./styles";

const NavItem = ({ label, icon: Icon, href, navBarOpen }) => {
  const handleItem = () => {
    if (navBarOpen) {
      return (
        <StyledItem href={href}>
          <Icon />
          <StyledLabel>{label}</StyledLabel>
        </StyledItem>
      );
    } else {
      return (
        <StyledItem href={href}>
          <Icon />
        </StyledItem>
      );
    }
  };

  return <StyledList>{handleItem()}</StyledList>;
};

NavItem.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.any,
  href: PropTypes.string
};

export default NavItem;
