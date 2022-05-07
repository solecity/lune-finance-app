// base
import React, { useState, useEffect } from "react";

// libraries
import { getYear, subYears, startOfYear, endOfYear } from "date-fns";

// custom components
import { Container, Header, Tabs } from "shared/components";
import { StatsType, Chart, ExpenseChart } from "./components";

// styled components
import { StyledCharts } from "./styles";

const Overview = () => {
  const currentYear = String(getYear(new Date()));
  const lastYear = String(getYear(new Date()) - 1);

  const [tab, setTab] = useState(currentYear);
  const [selected, setSelected] = useState(tab);
  const [year, setYear] = useState({
    start: startOfYear(new Date()),
    end: endOfYear(new Date())
  });

  const tabs = [lastYear, currentYear];

  const handleTabs = () => {
    if (selected === currentYear)
      setYear({
        start: startOfYear(new Date()),
        end: endOfYear(new Date())
      });
    else
      setYear({
        start: startOfYear(subYears(new Date(), 1)),
        end: endOfYear(subYears(new Date(), 1))
      });
  };

  useEffect(() => {
    handleTabs();
  }, [selected]);

  return (
    <Container>
      <Header title={"Overview"} />
      <Tabs
        tabs={tabs}
        setTab={setTab}
        selected={selected}
        setSelected={setSelected}
      />
      <StatsType year={year} />
      <StyledCharts>
        <Chart year={year} />
        <ExpenseChart year={year} />
      </StyledCharts>
    </Container>
  );
};

Overview.propTypes = {};

export default Overview;
