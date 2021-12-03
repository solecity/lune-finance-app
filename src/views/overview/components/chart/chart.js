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

// styled components
import {
  StyleCircularProgress,
  StyledPaper,
  StyleGrid,
  StyledTitle
} from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

const Chart = ({ year }) => {
  const settings = useRecoilValue(settingsState);

  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState([]);

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
    series: stats
  };

  const getData = async () => {
    setIsLoading(true);

    const { data } = await OverviewService.getMonthlyStats(year);

    setStats(data.stats);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledPaper>
      <StyledTitle container>
        <Typography component="div" variant="h6" className="green">
          Income / Outcome
        </Typography>
      </StyledTitle>
      {isLoading ? (
        <StyleGrid container>
          <StyleCircularProgress />
        </StyleGrid>
      ) : (
        <Grid item>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </Grid>
      )}
    </StyledPaper>
  );
};

Chart.propTypes = {
  year: PropTypes.object.isRequired
};

export default Chart;
