// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";

// api
import OverviewService from "shared/services/overview";

// external components
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

// styled components
import { StyledGrid, StyledCard, StyledTypography } from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

const StatsType = ({ year }) => {
  const settings = useRecoilValue(settingsState);

  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({});

  const getData = async () => {
    setIsLoading(true);

    const { data } = await OverviewService.getTypeStats(year);

    setStats(data.stats);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <StyledGrid item xs={6} sm={3}>
        <StyledCard>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <StyledTypography component="div" variant="h6" className="green">
              {Math.trunc(stats.income * 100) / 100} {settings.currencySymbol}
            </StyledTypography>
          )}
          <StyledTypography component="div" variant="body2" className="label">
            Income
          </StyledTypography>
        </StyledCard>
      </StyledGrid>
      <StyledGrid item xs={6} sm={3}>
        <StyledCard>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <StyledTypography component="div" variant="h6" className="red">
              {Math.trunc(stats.expense * 100) / 100} {settings.currencySymbol}
            </StyledTypography>
          )}
          <StyledTypography component="div" variant="body2" className="label">
            Expense
          </StyledTypography>
        </StyledCard>
      </StyledGrid>
      <StyledGrid item xs={6} sm={3}>
        <StyledCard>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <StyledTypography component="div" variant="h6" className="yellow">
              {Math.trunc(stats.savings * 100) / 100} {settings.currencySymbol}
            </StyledTypography>
          )}
          <StyledTypography component="div" variant="body2" className="label">
            Savings
          </StyledTypography>
        </StyledCard>
      </StyledGrid>
      <StyledGrid item xs={6} sm={3}>
        <StyledCard>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <StyledTypography component="div" variant="h6" className="blue">
              {Math.trunc(stats.investment * 100) / 100}{" "}
              {settings.currencySymbol}
            </StyledTypography>
          )}
          <StyledTypography component="div" variant="body2" className="label">
            Investment
          </StyledTypography>
        </StyledCard>
      </StyledGrid>
    </>
  );
};

StatsType.propTypes = {
  year: PropTypes.object.isRequired
};

export default StatsType;
