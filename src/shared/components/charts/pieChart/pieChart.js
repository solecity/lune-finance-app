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
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// custom components
import { PieChart } from "shared/components";

// styled components
import {
  StyleCircularProgress,
  StyledPaper,
  StyleGrid,
  StyledTitle
} from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

const CategoriesChart = ({ title, series, isLoading }) => {
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

  console.log(isLoading);

  return (
    <StyledPaper>
      <StyledTitle container>
        <Typography component="div" variant="h6" className="green">
          {title}
        </Typography>
      </StyledTitle>
      {isLoading ? (
        <StyleGrid container>
          <StyleCircularProgress />
        </StyleGrid>
      ) : (
        <Grid item xs={12}>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </Grid>
      )}
    </StyledPaper>
  );
};

CategoriesChart.propTypes = {
  title: PropTypes.string.isRequired,
  series: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default CategoriesChart;
