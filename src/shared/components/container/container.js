// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledContainer } from "./styles";

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node
};

export default Container;
