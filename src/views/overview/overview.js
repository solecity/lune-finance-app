// base
import React, { useState, useEffect } from "react";

// api
import OverviewService from "shared/services/overview";

// external components
import Container from "@mui/material/Container";

// custom components
import { Header } from "shared/components";

const Overview = () => {
  const [typeStats, setTypeStats] = useState({});

  const getTypeStats = async () => {
    const { data } = await OverviewService.getTypeStats();

    setTypeStats(data.stats);
  };

  useEffect(() => {
    getTypeStats();
  }, []);

  return (
    <Container>
      <Header title={"Overview"} />
      <h4>Income: {typeStats.income}</h4>
      <h4>Expenses: {typeStats.expense}</h4>
      <h4>Savings: {typeStats.savings}</h4>
      <h4>Investments: {typeStats.investment} </h4>
    </Container>
  );
};

Overview.propTypes = {};

export default Overview;
