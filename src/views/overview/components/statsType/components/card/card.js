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

const StatsType = ({ isLoading, data, label, type }) => {
  // TODO get saved currency
  const currency = "€";

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

StatsType.defaultProps = {
  isLoading: true,
  data: 0
};

StatsType.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.number,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default StatsType;
