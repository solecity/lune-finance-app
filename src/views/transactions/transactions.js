// base
import React from "react";

// external components
import Container from "@mui/material/Container";

// custom components
import { Header } from "shared/components";
import { Form, Table } from "./components";

const Transactions = () => {
  return (
    <Container>
      <Header title={"Transactions"} />
      <Form />
      <Table />
    </Container>
  );
};

Transactions.propTypes = {};

export default Transactions;
