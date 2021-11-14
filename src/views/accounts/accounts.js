// base
import React, { useState, useEffect } from "react";

// api
import AccountService from "shared/services/account";

// external components
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// custom components
import { Header, Modal } from "shared/components";
import { Toolbar, Form, Cards } from "./components";

// styled components
import { StyledGridContainer, StyledListContainer } from "./styles";

const Accounts = () => {
  const [data, setData] = useState([]);
  const [account, setAccount] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const name = "account";

  const getData = async () => {
    const { data } = await AccountService.getMany();

    setData(data.accounts);
  };

  const handleModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <Container>
      <Header title={"Accounts"} />
      <Toolbar
        handleModal={handleModal}
        setIsEdit={setIsEdit}
        setAccount={setAccount}
      />
      <StyledGridContainer container spacing={1}>
        <Grid item xs={5}>
          <StyledListContainer scrollbarMaxSize={200}>
            <Cards
              data={data}
              handleModal={handleModal}
              setIsEdit={setIsEdit}
              setAccount={setAccount}
            />
          </StyledListContainer>
        </Grid>
        <Grid item xs={7}>
          <Paper style={{ height: "calc(100vh - 200px)" }}></Paper>
        </Grid>
      </StyledGridContainer>
      <Modal
        name={name}
        handleModal={handleModal}
        isOpen={isOpen}
        isEdit={isEdit}
      >
        <Form account={account} handleModal={handleModal} />
      </Modal>
    </Container>
  );
};

Accounts.propTypes = {};

export default Accounts;
