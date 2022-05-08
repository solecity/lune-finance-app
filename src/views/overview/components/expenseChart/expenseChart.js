// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// api
import StatsService from "shared/services/stats";

// custom components
import { PieChart } from "shared/components";

const ExpenseChart = ({ year }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    setIsLoading(true);

    // TODO check data
    const { data } = await StatsService.getCategoriesStats(year);

    setData(data.stats);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [year]);

  return <PieChart title="Expenses" series={data} isLoading={isLoading} />;
};

ExpenseChart.propTypes = {
  year: PropTypes.object.isRequired
};

export default ExpenseChart;
