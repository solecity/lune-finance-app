// base
import React, { useState, useEffect } from "react";

// api
import DebtService from "shared/services/debt";

// external components
import Container from "@mui/material/Container";

// custom components
import { Header } from "shared/components";
import { Form, Table } from "./components";

const Debts = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await DebtService.getMany();

    setData(data.debts);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Header title={"Debts"} />
      <Form />
      <Table data={data} />
    </Container>
  );
};

Debts.propTypes = {};

export default Debts;
