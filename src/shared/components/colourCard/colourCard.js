// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledCard } from "./styles";

const ColourCard = ({ colour }) => {
  return <StyledCard colour={colour}></StyledCard>;
};

ColourCard.propTypes = {
  colour: PropTypes.string.isRequired
};

export default ColourCard;
