// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledContainer, StyleTitle } from "./styles";

const Header = ({ title }) => {
  return (
    <StyledContainer>
      <StyleTitle>{title}</StyleTitle>
    </StyledContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
