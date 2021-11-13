// base
import React, { useState, useEffect } from "react";

// api
import GoalService from "shared/services/goal";

// external components
import Container from "@mui/material/Container";

// custom components
import { Header } from "shared/components";
import { Form, Table } from "./components";

const Goals = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await GoalService.getMany();

    setData(data.goals);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Header title={"Goals"} />
      <Form />
      <Table data={data} />
    </Container>
  );
};

Goals.propTypes = {};

export default Goals;
