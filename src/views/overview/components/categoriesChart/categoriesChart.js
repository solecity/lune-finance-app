// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// api
import OverviewService from "shared/services/overview";

// custom components
import { PieChart } from "shared/components";

const CategoriesChart = ({ year }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState([]);

  const getData = async () => {
    setIsLoading(true);

    const { data } = await OverviewService.getCategoriesStats(year);

    setStats(data.stats);
    setIsLoading(false);
  };

  useEffect(() => {
    //getData();
  }, []);

  return <PieChart title="Expenses" series={stats} isLoading={isLoading} />;
};

CategoriesChart.propTypes = {
  year: PropTypes.object.isRequired
};

export default CategoriesChart;