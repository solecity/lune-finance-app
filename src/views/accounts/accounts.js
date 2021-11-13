// base
import React, { useState, useEffect } from "react";

// api
import AccountService from "shared/services/account";

// external components
import Container from "@mui/material/Container";

// custom components
import { Header, Modal } from "shared/components";
import { Toolbar, Form, Cards } from "./components";

const Accounts = () => {
  const [data, setData] = useState([]);
  const [account, setAccount] = useState({});
  const [title, setTitle] = useState("New Account");
  const [open, setOpen] = useState(true);

  const getData = async () => {
    const { data } = await AccountService.getMany();

    setData(data.accounts);
  };

  const handleModal = (el) => {
    if (el) {
      setTitle("Edit Account");
      setAccount(el);
    } else {
      setTitle("New Account");
    }

    setOpen(!open);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Header title={"Accounts"} />
      <Toolbar handleModal={handleModal} />
      <Modal title={title} open={open} handleModal={handleModal}>
        <Form account={account} handleModal={handleModal} />
      </Modal>
      <Cards data={data} />
    </Container>
  );
};

Accounts.propTypes = {};

export default Accounts;
