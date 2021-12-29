// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";

// api
import AccountService from "shared/services/account";

// external components
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

// custom components
import { Card } from "./components";

// styled components
import {
  StyledBoard,
  StyledGrid,
  StyledScroll,
  StyledScrollWrapper,
  StyledColumn
} from "./styles";

const GoalsAccounts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [accounts, setAccounts] = useState([]);

  const getData = async () => {
    setIsLoading(true);

    const { data } = await AccountService.getGoalsFunds();

    setAccounts(data.accounts);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledBoard container>
      <StyledGrid>
        <StyledScroll>
          <StyledScrollWrapper>
            {accounts.map((account, i) => (
              <StyledColumn item xs={4} key={i}>
                <Card account={account} />
              </StyledColumn>
            ))}
          </StyledScrollWrapper>
        </StyledScroll>
      </StyledGrid>
    </StyledBoard>
  );
};

GoalsAccounts.propTypes = {};

export default GoalsAccounts;
