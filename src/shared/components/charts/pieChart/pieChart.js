// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// external components
import CircularProgress from "@mui/material/CircularProgress";

// styled components
import { StyledCard, StyledTitle } from "styles/default/chartCard";

// atom
import { settingsState } from "shared/recoil/atoms";

const PieChart = ({ title, series, isLoading }) => {
  const settings = useRecoilValue(settingsState);

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
      pointFormat: `<b>{point.percentage:.1f}%</b> : {point.y:.2f} ${settings.currencySymbol}`
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
    <StyledCard>
      <StyledTitle>{title}</StyledTitle>
      {isLoading ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <div>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      )}
    </StyledCard>
  );
};

PieChart.propTypes = {
  title: PropTypes.string.isRequired,
  series: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default PieChart;
