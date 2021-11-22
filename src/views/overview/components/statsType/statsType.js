// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";

// api
import OverviewService from "shared/services/overview";

// external components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// styled components
import { StyleGrid, StyledCard, StyledTypography } from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

const StatsType = () => {
  const settings = useRecoilValue(settingsState);

  const [stats, setStats] = useState({});

  const getData = async () => {
    const { data } = await OverviewService.getTypeStats();

    setStats(data.stats);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid container spacing={1}>
      <StyleGrid item xs={3}>
        <StyledCard>
          <Typography component="div" variant="h6">
            {stats.income} {settings.currencySymbol}
          </Typography>
          <StyledTypography component="div" variant="body2">
            Income
          </StyledTypography>
        </StyledCard>
      </StyleGrid>
      <Grid item xs={3}>
        <StyledCard>
          <Typography component="div" variant="h6">
            {stats.expense} {settings.currencySymbol}
          </Typography>
          <StyledTypography component="div" variant="body2">
            Expense
          </StyledTypography>
        </StyledCard>
      </Grid>
      <Grid item xs={3}>
        <StyledCard>
          <Typography component="div" variant="h6">
            {stats.savings} {settings.currencySymbol}
          </Typography>
          <StyledTypography component="div" variant="body2">
            Savings
          </StyledTypography>
        </StyledCard>
      </Grid>
      <Grid item xs={3}>
        <StyledCard>
          <Typography component="div" variant="h6">
            {stats.investment} {settings.currencySymbol}
          </Typography>
          <StyledTypography component="div" variant="body2">
            Investment
          </StyledTypography>
        </StyledCard>
      </Grid>
    </Grid>
  );
};

StatsType.propTypes = {};

export default StatsType;
