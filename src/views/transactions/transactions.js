// base
import React from "react";

// external components
import Container from "@mui/material/Container";

// custom components
import { Header } from "shared/components";

const Transactions = () => {
  return (
    <Container>
      <Header title={"Transactions"} />
    </Container>
  );
};

Transactions.propTypes = {};

export default Transactions;
