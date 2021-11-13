// base
import React, { useState, useEffect } from "react";

// api
import TransactionService from "shared/services/transaction";

// external components
import Container from "@mui/material/Container";

// custom components
import { Header } from "shared/components";
import { Form, Table } from "./components";

const Transactions = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await TransactionService.getMany();

    setData(data.transactions);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Header title={"Transactions"} />
      <Form />
      <Table data={data} />
    </Container>
  );
};

Transactions.propTypes = {};

export default Transactions;
