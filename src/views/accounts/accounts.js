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
  }, []);

  return (
    <Container>
      <Header title={"Accounts"} />
      <Toolbar
        handleModal={handleModal}
        setIsEdit={setIsEdit}
        setAccount={setAccount}
      />
      <Modal
        name={name}
        handleModal={handleModal}
        isOpen={isOpen}
        isEdit={isEdit}
      >
        <Form account={account} handleModal={handleModal} />
      </Modal>
      <Cards
        data={data}
        handleModal={handleModal}
        setIsEdit={setIsEdit}
        setAccount={setAccount}
      />
    </Container>
  );
};

Accounts.propTypes = {};

export default Accounts;
