// base
import React, { useState, useEffect } from "react";

// api
import CategoryService from "shared/services/category";

// external components
import Container from "@mui/material/Container";

// custom components
import { Header } from "shared/components";
import { Form, Table } from "./components";

const Categories = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await CategoryService.getMany();

    setData(data.categories);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Header title={"Categories"} />
      <Form />
      <Table data={data} />
    </Container>
  );
};

Categories.propTypes = {};

export default Categories;
