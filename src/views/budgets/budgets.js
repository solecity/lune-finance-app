// base
import React, { useState, useEffect } from "react";

// api
import CategoryService from "shared/services/category";

// external components
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// custom components
import { Header, Toolbar } from "shared/components";

// styled components

const Budgets = () => {
  const [data, setData] = useState([]);
  const [budget, setBudget] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const getData = async () => {
    const { data } = await CategoryService.getMany();

    setData(data.accounts);
  };

  const handleForm = () => setIsOpen(!isOpen);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container maxWidth="xl">
      <Header title={"Budgets"} />
      <Toolbar handleForm={handleForm} setIsEdit={setIsEdit} />
      <Grid container spacing={1}>
        <Grid item xs={5}></Grid>
        <Grid item xs={7}>
          <Paper style={{ height: "calc(100vh - 200px)" }}></Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

Budgets.propTypes = {};

export default Budgets;
