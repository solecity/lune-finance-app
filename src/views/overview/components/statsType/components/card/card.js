// base
import React from "react";
import PropTypes from "prop-types";

// external components
import CircularProgress from "@mui/material/CircularProgress";

// styled components
import { StyledCard, StyledTitle, StyledText } from "./styles";

const StatsType = ({ isLoading, data, label, type, currency }) => {
  console.log({ isLoading, data, type, currency });
  return (
    <StyledCard>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <StyledTitle className={type}>
          {Math.trunc(data * 100) / 100} {currency}
        </StyledTitle>
      )}
      <StyledText className="label">{label}</StyledText>
    </StyledCard>
  );
};

StatsType.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
};

export default StatsType;
