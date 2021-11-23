// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// api
import OverviewService from "shared/services/overview";

// external components
import Typography from "@mui/material/Typography";

// styled components
import { StyledPaper } from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

const Chart = ({ data }) => {
  const settings = useRecoilValue(settingsState);

  const options = {
    title: {
      text: "Income / Outcome"
    },
    chart: {
      type: "column"
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: [
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
      ]
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
    series: data
  };

  return (
    <StyledPaper>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </StyledPaper>
  );
};

Chart.propTypes = {
  data: PropTypes.array.isRequired
};

export default Chart;
