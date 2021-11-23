// base
import React, { useState, useEffect } from "react";

// libraries
import { startOfYear, endOfYear } from "date-fns";

// api
import OverviewService from "shared/services/overview";

// external components
import Container from "@mui/material/Container";

// custom components
import { Header } from "shared/components";
import { StatsType, Chart } from "./components";

const Overview = () => {
  const [stats, setStats] = useState([]);

  const year = {
    start: startOfYear(new Date()),
    end: endOfYear(new Date())
  };

  const getData = async () => {
    const { data } = await OverviewService.getDateStats(year);
    console.log(data);
    setStats(data.stats);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Header title={"Overview"} />
      <StatsType />
      <Chart data={stats} />
    </Container>
  );
};

Overview.propTypes = {};

export default Overview;
