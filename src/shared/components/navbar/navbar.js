// base
import React, { useState } from "react";

// custom components
import { NavItem } from "./components";

// styled components
import {
  StyledScroll,
  StyledDrawer,
  StyledLogo,
  StyledMenu,
  StyledDivider,
  StyledFooter
} from "./styles";

// config
import { menuItems, footerItems } from "config/navbar";

// logo
import { IconAlt, LogoAlt } from "shared/logos";

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const openNavBar = () => setNavBarOpen(true);

  const closeNavBar = () => setNavBarOpen(false);

  const handleLogo = () => {
    if (navBarOpen) {
      return (
        <StyledLogo>
          <LogoAlt />
        </StyledLogo>
      );
    } else {
      return (
        <StyledLogo className="icon">
          <IconAlt />
        </StyledLogo>
      );
    }
  };

  return (
    <StyledDrawer onMouseEnter={openNavBar} onMouseLeave={closeNavBar}>
      <StyledScroll className="hello">
        {handleLogo()}
        <div>
          <StyledMenu>
            <div>
              {menuItems.map((item) => (
                <NavItem
                  key={item.name}
                  label={item.label}
                  icon={item.icon}
                  href={item.href}
                  navBarOpen={navBarOpen}
                />
              ))}
            </div>
            <div>
              {footerItems.map((item) => (
                <NavItem
                  key={item.name}
                  label={item.label}
                  icon={item.icon}
                  href={item.href}
                  navBarOpen={navBarOpen}
                />
              ))}
              <StyledDivider />
              <StyledFooter>
                <p className="copyright">
                  {navBarOpen ? "LUNE © 2022" : "aaaa"}
                </p>
                <p className="version">v 0.1.0</p>
              </StyledFooter>
            </div>
          </StyledMenu>
        </div>
      </StyledScroll>
    </StyledDrawer>
  );
};

NavBar.propTypes = {};

export default NavBar;
