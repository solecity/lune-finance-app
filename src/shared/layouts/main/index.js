// base
import React from "react";
import PropTypes from "prop-types";

// custom components
import { NavBar } from "shared/components";

// styled components
import { StyledContainer, StyledWrapper } from "./styles";

const Main = ({ children }) => {
  return (
    <StyledContainer>
      <NavBar />
      <StyledWrapper>{children}</StyledWrapper>
    </StyledContainer>
  );
};

Main.propTypes = {
  children: PropTypes.any
};

export default Main;
