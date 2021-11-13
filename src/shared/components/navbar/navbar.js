// base
import React from "react";

// external components
import { Drawer, Paper } from "@mui/material";
import Box from "@mui/material/Box";

// custom components
import { NavItem } from "./components";

// styled components
import {
  StyledDrawer,
  StyledPaper,
  StyledNavBarBox,
  StyledMenuList,
  StyledMenuBox
} from "./styles";

// config
import { menuItems, footerItems } from "config/navbar";

const NavBar = () => {
  return (
    <StyledDrawer
      PaperProps={{ component: StyledPaper }}
      anchor="left"
      open
      variant="permanent"
    >
      <StyledNavBarBox>
        <StyledMenuList>
          <StyledMenuBox>
            {menuItems.map((item) => (
              <NavItem
                key={item.name}
                label={item.label}
                icon={item.icon}
                href={item.href}
              />
            ))}
          </StyledMenuBox>

          <Box>
            <Box>
              {footerItems.map((item) => (
                <NavItem
                  key={item.name}
                  label={item.label}
                  icon={item.icon}
                  href={item.href}
                />
              ))}
            </Box>
          </Box>
        </StyledMenuList>
      </StyledNavBarBox>
    </StyledDrawer>
  );
};

NavBar.propTypes = {};

export default NavBar;
