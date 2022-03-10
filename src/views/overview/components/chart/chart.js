// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// api
import StatsService from "shared/services/stats";

// custom components
import { BarChart } from "shared/components";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const Chart = ({ year }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    setIsLoading(true);

    const { data } = await StatsService.getMonthlyStats(year);

    setData(data.stats);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [year]);

  return (
    <BarChart
      title="Income / Outcome"
      series={data}
      categories={months}
      isLoading={isLoading}
    />
  );
};

Chart.propTypes = {
  year: PropTypes.object.isRequired
};

export default Chart;
