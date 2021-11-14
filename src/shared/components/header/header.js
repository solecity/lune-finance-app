// base
import React from "react";
import PropTypes from "prop-types";

// external components
import Typography from "@mui/material/Typography";

// styled components
import { StyledContainer } from "./styles";

const Header = ({ title }) => {
  return (
    <StyledContainer>
      <Typography variant="h4">{title}</Typography>
    </StyledContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
