// base
import React, { useState, useEffect } from "react";

// api
import AccountService from "shared/services/account";

// external components
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// custom components
import { Header, Toolbar, Modal } from "shared/components";
import { Form, Cards } from "./components";

// styled components
import { StyledGrid } from "./styles";

const Accounts = () => {
  const [data, setData] = useState([]);
  const [account, setAccount] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const getData = async () => {
    const { data } = await AccountService.getMany();

    setData(data.accounts);
  };

  const handleForm = () => setIsOpen(!isOpen);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container maxWidth="xl">
      <Header title={"Accounts"} />
      <Toolbar
        handleForm={handleForm}
        setIsEdit={setIsEdit}
        setElement={setAccount}
      />
      <StyledGrid container spacing={1}>
        <Grid item xs={5}>
          <Cards
            data={data}
            getData={getData}
            handleForm={handleForm}
            setAccount={setAccount}
            setIsEdit={setIsEdit}
          />
        </Grid>
        <Grid item xs={7}>
          <Paper style={{ height: "calc(100vh - 200px)" }}></Paper>
        </Grid>
      </StyledGrid>
      <Modal
        name="account"
        handleModal={handleForm}
        isOpen={isOpen}
        isEdit={isEdit}
      >
        <Form
          account={account}
          handleForm={handleForm}
          getData={getData}
          isEdit={isEdit}
        />
      </Modal>
    </Container>
  );
};

Accounts.propTypes = {};

export default Accounts;
