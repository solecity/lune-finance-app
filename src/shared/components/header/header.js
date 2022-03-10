// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyleTitle } from "./styles";

const Header = ({ title }) => {
  return <StyleTitle>{title}</StyleTitle>;
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
