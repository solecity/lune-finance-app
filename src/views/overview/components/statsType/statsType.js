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
          <StyledTypography component="div" variant="h6" className="green">
            {stats.income} {settings.currencySymbol}
          </StyledTypography>
          <StyledTypography component="div" variant="body2" className="label">
            Income
          </StyledTypography>
        </StyledCard>
      </StyleGrid>
      <Grid item xs={3}>
        <StyledCard>
          <StyledTypography component="div" variant="h6" className="red">
            {stats.expense} {settings.currencySymbol}
          </StyledTypography>
          <StyledTypography component="div" variant="body2" className="label">
            Expense
          </StyledTypography>
        </StyledCard>
      </Grid>
      <Grid item xs={3}>
        <StyledCard>
          <StyledTypography component="div" variant="h6" className="green">
            {stats.savings} {settings.currencySymbol}
          </StyledTypography>
          <StyledTypography component="div" variant="body2" className="label">
            Savings
          </StyledTypography>
        </StyledCard>
      </Grid>
      <Grid item xs={3}>
        <StyledCard>
          <StyledTypography component="div" variant="h6" className="blue">
            {stats.investment} {settings.currencySymbol}
          </StyledTypography>
          <StyledTypography component="div" variant="body2" className="label">
            Investment
          </StyledTypography>
        </StyledCard>
      </Grid>
    </Grid>
  );
};

StatsType.propTypes = {};

export default StatsType;
