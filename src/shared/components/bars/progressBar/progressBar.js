// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyleContainer, StyledBar, StyledParams, StyledValue } from "./styles";

const ProgressBar = ({ percentage, allocated, remaining, currency }) => {
  const completed = remaining <= 0 ? "completed" : null;

  return (
    <StyleContainer>
      <StyledBar
        variant="determinate"
        value={percentage}
        className={completed}
      />
      <StyledParams>
        <StyledValue>
          {allocated} {currency}
        </StyledValue>
        <StyledValue>
          {remaining} {currency}
        </StyledValue>
      </StyledParams>
    </StyleContainer>
  );
};

ProgressBar.defaultProps = {
  percentage: 0,
  remaining: 0,
  allocated: 0
};

ProgressBar.propTypes = {
  percentage: PropTypes.number,
  remaining: PropTypes.number,
  allocated: PropTypes.number,
  currency: PropTypes.string.isRequired
};

export default ProgressBar;
