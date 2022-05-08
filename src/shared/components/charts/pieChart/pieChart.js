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

const PieChart = ({ title, series, isLoading }) => {
  // TODO get saved currency
  const currency = "€";

  const options = {
    title: {
      text: ""
    },
    chart: {
      type: "pie",
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
      pointFormat: `<b>{point.percentage:.1f}%</b> : {point.y:.2f} ${currency}`
    },
    accessibility: {
      point: {
        valueSuffix: "%"
      }
    },
    legend: { itemMarginTop: 2, maxHeight: 100 },
    plotOptions: {
      pie: {
        cursor: "pointer",
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series
  };

  return (
    <ChartCard title={title} isLoading={isLoading}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <HighchartsReact highcharts={Highcharts} options={options} />
      )}
    </ChartCard>
  );
};

PieChart.propTypes = {
  title: PropTypes.string.isRequired,
  series: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default PieChart;
