// base
import React from "react";

// external components
import { Drawer, Paper } from "@mui/material";
import Box from "@mui/material/Box";

// custom components
import { NavItem } from "./components";

// styled components

// config
import { menuItems, footerItems } from "config/navbar";

const NavBar = () => {
  return (
    <Drawer
      PaperProps={{ component: Paper }}
      anchor="left"
      open
      variant="permanent"
    >
      <Box>
        <Box>
          <Box>
            {menuItems.map((item) => (
              <NavItem
                key={item.name}
                label={item.label}
                icon={item.icon}
                href={item.href}
              />
            ))}
          </Box>

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
        </Box>
      </Box>
    </Drawer>
  );
};

NavBar.propTypes = {};

export default NavBar;
