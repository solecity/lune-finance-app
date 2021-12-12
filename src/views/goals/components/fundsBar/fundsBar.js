// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";
import { startOfYear, endOfYear } from "date-fns";

// api
import StatsService from "shared/services/stats";

// external components
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

// styled components
import { StyledCard, StyledTypography } from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

const FundsBar = () => {
  const settings = useRecoilValue(settingsState);

  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({});

  const year = {
    start: startOfYear(new Date()),
    end: endOfYear(new Date())
  };

  const getData = async () => {
    setIsLoading(true);

    const { data } = await StatsService.getTypeStats(year);

    setStats(data.stats);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid item xs={6} sm={3}>
        <StyledCard>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <StyledTypography component="div" variant="h6" className="yellow">
              {Math.trunc(stats.savings * 100) / 100} {settings.currencySymbol}
            </StyledTypography>
          )}
          <StyledTypography component="div" variant="body2" className="label">
            Total
          </StyledTypography>
        </StyledCard>
      </Grid>
      <Grid item xs={6} sm={3}>
        <StyledCard>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <StyledTypography component="div" variant="h6" className="blue">
              0 {settings.currencySymbol}
            </StyledTypography>
          )}
          <StyledTypography component="div" variant="body2" className="label">
            Allocated
          </StyledTypography>
        </StyledCard>
      </Grid>
    </Grid>
  );
};

FundsBar.propTypes = {};

export default FundsBar;
