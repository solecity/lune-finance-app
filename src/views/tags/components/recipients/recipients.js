// base
import React, { useState, useEffect } from "react";

// api
import RecipientService from "shared/services/recipient";

// external components
import Container from "@mui/material/Container";

// custom components
import { Header } from "shared/components";
import { Form, Table } from "./components";

const Recipients = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await RecipientService.getMany();

    setData(data.recipients);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Header title={"Recipients"} />
      <Form />
      <Table data={data} />
    </Container>
  );
};

Recipients.propTypes = {};

export default Recipients;
