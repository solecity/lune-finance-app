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

const Chart = ({ title, series, categories, isLoading }) => {
  const settings = useRecoilValue(settingsState);

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
        format: `{value} ${settings.currencySymbol}`
      }
    },
    tooltip: {
      valueDecimals: 2
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

Chart.propTypes = {
  title: PropTypes.string.isRequired,
  series: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Chart;
