// base
import React, { useState, useEffect } from "react";

// api
import TransactionService from "shared/services/transaction";
import AccountService from "../../shared/services/account";

// external components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// custom components
import { Header } from "shared/components";
import { Form, Table } from "./components";

const Transactions = () => {
  const [data, setData] = useState([]);
  const [transaction, setTransaction] = useState({});
  const [accounts, setAccounts] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const getData = async () => {
    const { data } = await TransactionService.getMany();

    setData(data.transactions);
  };

  const getAccounts = async () => {
    const { data } = await AccountService.getMany();

    setAccounts(data.accounts);
  };

  useEffect(() => {
    getData();
    getAccounts();
  }, []);

  return (
    <Container>
      <Header title={"Transactions"} />
      <Form
        transaction={transaction}
        getData={getData}
        isEdit={isEdit}
        accounts={accounts}
      />
      <Table data={data} accounts={accounts} />
    </Container>
  );
};

Transactions.propTypes = {};

export default Transactions;
