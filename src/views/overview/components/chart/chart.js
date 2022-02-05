// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// api
import StatsService from "shared/services/stats";

// external components
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// styled components
import { StyleGrid, StyledTitle } from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

const Chart = ({ year }) => {
  const settings = useRecoilValue(settingsState);

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

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
    <Paper>
      <StyledTitle container>
        <Typography component="div" variant="h6" className="green">
          Income / Outcome
        </Typography>
      </StyledTitle>
      {isLoading ? (
        <StyleGrid container>
          <CircularProgress />
        </StyleGrid>
      ) : (
        <Grid item>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </Grid>
      )}
    </Paper>
  );
};

Chart.propTypes = {
  year: PropTypes.object.isRequired
};

export default Chart;
