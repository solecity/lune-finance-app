// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// api
import StatsService from "shared/services/stats";

// custom components
import { PieChart } from "shared/components";

const CategoriesChart = ({ year }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    setIsLoading(true);

    const { data } = await StatsService.getCategoriesStats(year);

    setData(data.stats);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [year]);

  return <PieChart title="Expenses" series={data} isLoading={isLoading} />;
};

CategoriesChart.propTypes = {
  year: PropTypes.object.isRequired
};

export default CategoriesChart;
