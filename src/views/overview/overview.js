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
  /*const year = {
    start: startOfYear(new Date()),
    end: endOfYear(new Date())
  };*/

  return (
    <Container>
      <Header title={"Overview"} />
      <Grid container spacing={1}></Grid>
    </Container>
  );
};

Overview.propTypes = {};

export default Overview;
