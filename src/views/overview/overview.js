// base
import React from "react";

// libraries
import { startOfYear, endOfYear } from "date-fns";

// external components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// custom components
import { Header } from "shared/components";
import { StatsType, Chart, CategoriesChart } from "./components";

const Overview = () => {
  const year = {
    start: startOfYear(new Date()),
    end: endOfYear(new Date())
  };

  return (
    <Container maxWidth="xl">
      <Header title={"Overview"} />
      <Grid container spacing={1}>
        <StatsType year={year} />
        <Grid item xs={12} md={8}>
          <Chart year={year} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CategoriesChart year={year} />
        </Grid>
      </Grid>
    </Container>
  );
};

Overview.propTypes = {};

export default Overview;
