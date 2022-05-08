// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// external components
// TODO add custom loader
import CircularProgress from "@mui/material/CircularProgress";

// custom components
import { ChartCard } from "shared/components";

const Chart = ({ title, series, categories, isLoading }) => {
  // TODO get saved currency
  const currency = "€";

  const options = {
    title: {
      text: ""
    },
    chart: {
      type: "column"
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories
    },
    yAxis: {
      title: { text: null },
      labels: {
        format: `{value} ${currency}`
      }
    },
    tooltip: {
      valueDecimals: 2
    },
    series
  };

  return (
    <ChartCard title={title}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <HighchartsReact highcharts={Highcharts} options={options} />
      )}
    </ChartCard>
  );
};

Chart.propTypes = {
  title: PropTypes.string.isRequired,
  series: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Chart;
