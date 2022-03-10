// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";

// api
import StatsService from "shared/services/stats";

// custom components
import { Card } from "./components";

// styled components
import { StyledStats } from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

const StatsType = ({ year }) => {
  const settings = useRecoilValue(settingsState);

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const getData = async () => {
    setIsLoading(true);

    const { data } = await StatsService.getTypeStats(year);

    setData(data.stats);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [year]);

  return (
    <StyledStats>
      <Card
        isLoading={isLoading}
        data={data.income}
        label="Income"
        type="income"
        currency={settings.currencySymbol}
      />
      <Card
        isLoading={isLoading}
        data={data.expense}
        label="Expenses"
        type="expense"
        currency={settings.currencySymbol}
      />
      <Card
        isLoading={isLoading}
        data={data.savings}
        label="Savings"
        type="savings"
        currency={settings.currencySymbol}
      />
      <Card
        isLoading={isLoading}
        data={data.investment}
        label="Investments"
        type="investment"
        currency={settings.currencySymbol}
      />
    </StyledStats>
  );
};

StatsType.propTypes = {
  year: PropTypes.object.isRequired
};

export default StatsType;
