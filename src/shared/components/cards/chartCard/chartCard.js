// base
import React from "react";
import PropTypes from "prop-types";

// custom components
import { DefaultCard } from "shared/components";

// styled components
import { StyledContent, StyledTitle } from "./styles";

const ChartCard = ({ title, children }) => {
  return (
    <DefaultCard>
      <StyledContent>
        <StyledTitle>{title}</StyledTitle>
        {children}
      </StyledContent>
    </DefaultCard>
  );
};

ChartCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default ChartCard;
