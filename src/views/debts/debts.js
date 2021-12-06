// base
import React, { useState, useEffect } from "react";

// api
import DebtService from "shared/services/debt";

// external components
import Container from "@mui/material/Container";

// custom components
import { Header, Toolbar, Modal } from "shared/components";
import { Form, Cards } from "./components";

const Debts = () => {
  const [data, setData] = useState([]);
  const [debt, setDebt] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const getData = async () => {
    const { data } = await DebtService.getMany();

    setData(data.debts);
  };

  const handleForm = () => setIsOpen(!isOpen);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container maxWidth="xl">
      <Header title={"Debts"} />
      <Toolbar
        handleForm={handleForm}
        setIsEdit={setIsEdit}
        setElement={setDebt}
      />
      <Cards
        data={data}
        getData={getData}
        handleForm={handleForm}
        setDebt={setDebt}
        setIsEdit={setIsEdit}
      />
      <Modal
        name="debt"
        handleModal={handleForm}
        isOpen={isOpen}
        isEdit={isEdit}
      >
        <Form
          debt={debt}
          handleForm={handleForm}
          getData={getData}
          isEdit={isEdit}
        />
      </Modal>
    </Container>
  );
};

Debts.propTypes = {};

export default Debts;
