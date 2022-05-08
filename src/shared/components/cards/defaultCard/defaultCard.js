// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledCard } from "./styles";

const DefaultCard = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

DefaultCard.propTypes = {
  children: PropTypes.node
};

export default DefaultCard;
