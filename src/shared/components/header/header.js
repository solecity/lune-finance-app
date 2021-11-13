// base
import React from "react";
import PropTypes from "prop-types";

// external components
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Header = ({ title }) => {
  return (
    <Container>
      <Typography variant="h4">{title}</Typography>
    </Container>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
