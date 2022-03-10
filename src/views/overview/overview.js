// base
import React, { useState, useEffect } from "react";

// libraries
import { getYear, subYears, startOfYear, endOfYear } from "date-fns";

// custom components
import { Container, Header, Tabs } from "shared/components";
// import { Toolbar, CategoriesChart } from "./components";
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
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({});

  const tabs = [lastYear, currentYear];

  const handleContent = () => {
    let year = {};

    switch (selected) {
      case currentYear:
        year = {
          start: startOfYear(new Date()),
          end: endOfYear(new Date())
        };
        break;
      case lastYear:
        year = {
          start: startOfYear(subYears(new Date(), 1)),
          end: endOfYear(subYears(new Date(), 1))
        };
        break;
      default:
        break;
    }

    return (
      <div>
        <StatsType year={year} isLoading={isLoading} data={stats} />
        <StyledCharts>
          <Chart year={year} />
          <ExpenseChart year={year} />
        </StyledCharts>
      </div>
    );
  };

  useEffect(() => {
    handleContent();
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
      {handleContent()}
    </Container>
  );
};

Overview.propTypes = {};

export default Overview;
