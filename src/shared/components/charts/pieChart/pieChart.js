// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// external components
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// styled components
import { StyledGrid, StyledTitle } from "./styles";

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

  return (
    <Paper>
      <StyledTitle container>
        <Typography component="div" variant="h6" className="green">
          {title}
        </Typography>
      </StyledTitle>
      {isLoading ? (
        <StyledGrid container>
          <CircularProgress />
        </StyledGrid>
      ) : (
        <Grid item xs={12}>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </Grid>
      )}
    </Paper>
  );
};

CategoriesChart.propTypes = {
  title: PropTypes.string.isRequired,
  series: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default CategoriesChart;
