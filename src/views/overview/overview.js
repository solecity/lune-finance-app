// base
import React, { useState, useEffect } from "react";

// libraries
import { getYear, subYears, startOfYear, endOfYear } from "date-fns";

// external components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// custom components
import { Header, TabButton } from "shared/components";
import { Toolbar, StatsType, Chart, CategoriesChart } from "./components";

// styled components
import { StyledGrid, StyledTabs } from "./styles";

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

  const handleTab = async (value) => {
    setTab(value);
    setSelected(value);
  };

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
      <>
        <StatsType year={year} isLoading={isLoading} data={stats} />
        <StyledGrid item sm={12} md={8}>
          <Chart year={year} />
        </StyledGrid>
        <StyledGrid item sm={12} md={4}>
          <CategoriesChart year={year} />
        </StyledGrid>
      </>
    );
  };

  useEffect(() => {
    handleContent();
  }, [selected]);

  return (
    <Container maxWidth="xl">
      <Header title={"Overview"} />
      <StyledTabs container spacing={1}>
        {tabs.map((tab, i) => (
          <Grid item xs={6} sm={4} md={2} key={i}>
            <TabButton
              tab={tab}
              text={tab}
              selected={selected}
              action={() => handleTab(tab)}
            />
          </Grid>
        ))}
      </StyledTabs>
      <Grid item>
        <Divider />
      </Grid>
      <Grid container spacing={1}>
        {handleContent()}
      </Grid>
    </Container>
  );
};

Overview.propTypes = {};

export default Overview;
