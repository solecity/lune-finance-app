// base
import React, { useState, useEffect } from "react";

// api
import AccountService from "shared/services/account";

// external components
import Container from "@mui/material/Container";

// custom components
import { Header } from "shared/components";
import { Form, Table } from "./components";

const Accounts = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await AccountService.getMany();

    setData(data.accounts);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Header title={"Accounts"} />
      <Form />
      <Table data={data} />
    </Container>
  );
};

Accounts.propTypes = {};

export default Accounts;
