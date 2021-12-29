// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";

// api
import AccountService from "shared/services/account";

// custom components
import { Card } from "./components";

// styled components
import { StyledContainer, StyledScroll } from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

const FundsList = ({ goal }) => {
  const settings = useRecoilValue(settingsState);

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
    <StyledContainer>
      <StyledScroll>
        {accounts.map((account, i) => (
          <Card key={i} account={account} goal={goal} />
        ))}
      </StyledScroll>
    </StyledContainer>
  );
};

FundsList.propTypes = {
  goal: PropTypes.object.isRequired
};

export default FundsList;
