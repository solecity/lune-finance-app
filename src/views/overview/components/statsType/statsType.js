// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// api
import StatsService from "shared/services/stats";

// custom components
import { Card } from "./components";

// styled components
import { StyledStats } from "./styles";

const StatsType = ({ year }) => {
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
      />
      <Card
        isLoading={isLoading}
        data={data.expense}
        label="Expenses"
        type="expense"
      />
      <Card
        isLoading={isLoading}
        data={data.savings}
        label="Savings"
        type="savings"
      />
      <Card
        isLoading={isLoading}
        data={data.investment}
        label="Investments"
        type="investment"
      />
    </StyledStats>
  );
};

StatsType.propTypes = {
  year: PropTypes.object.isRequired
};

export default StatsType;
