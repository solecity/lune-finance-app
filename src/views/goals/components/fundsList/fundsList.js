// base
import React, { useState, useEffect } from "react";

// api
import AccountService from "shared/services/account";

// libraries
import { useRecoilValue } from "recoil";

// external components
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

// styled components
import { StyledCard, StyledTypography } from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

// constants
import { CONSTANTS } from "constants/general";

const FundsList = () => {
  const settings = useRecoilValue(settingsState);

  const [isLoading, setIsLoading] = useState(true);
  const [accounts, setAccounts] = useState([]);

  const getData = async () => {
    setIsLoading(true);

    const { data } = await AccountService.getGoalsFunds();

    console.log(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid item xs={6} sm={3}>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

FundsList.propTypes = {};

export default FundsList;
