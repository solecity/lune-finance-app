// base
import React from "react";
import PropTypes from "prop-types";

// external components
// TODO add custom loader
import CircularProgress from "@mui/material/CircularProgress";

// custom components
import { DefaultCard } from "shared/components";

// styled components
import { StyledContent, StyledTitle, StyledText } from "./styles";

const StatsType = ({ isLoading, data, label, type, currency }) => {
  return (
    <DefaultCard>
      <StyledContent>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <StyledTitle className={type}>
            {Math.trunc(data * 100) / 100} {currency}
          </StyledTitle>
        )}
        <StyledText className="label">{label}</StyledText>
      </StyledContent>
    </DefaultCard>
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
