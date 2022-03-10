// base
import React from "react";
import PropTypes from "prop-types";

// custom components
import { NavBar } from "shared/components";

// styled components
import { StyledContainer, StyledWrapper, StyledScroll } from "./styles";

const Main = ({ children }) => {
  return (
    <StyledContainer>
      <NavBar />
      <StyledWrapper>
        <StyledScroll>{children}</StyledScroll>
      </StyledWrapper>
    </StyledContainer>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
