// base
import React, { useState, useEffect } from "react";

// api
import OverviewService from "shared/services/overview";

// external components
import Container from "@mui/material/Container";

// custom components
import { Header } from "shared/components";
import { StatsType } from "./components";

const Overview = () => {
  return (
    <Container>
      <Header title={"Overview"} />
      <StatsType />
    </Container>
  );
};

Overview.propTypes = {};

export default Overview;
