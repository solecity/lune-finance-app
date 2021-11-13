// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledContainer, StyledWrapper } from "./styles";

const Main = ({ children }) => {
  return (
    <StyledContainer>
      <StyledWrapper>{children}</StyledWrapper>
    </StyledContainer>
  );
};

Main.propTypes = {
  children: PropTypes.any
};

export default Main;
