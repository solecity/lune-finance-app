// base
import React, { useState, useEffect } from "react";

// api
import RecipientService from "shared/services/recipient";

// external components
import Container from "@mui/material/Container";

// custom components
import { Header, Toolbar, Modal } from "shared/components";
import { Form, Table } from "./components";

// constants
import { DEFAULT } from "constants/general";

const Recipients = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [recipient, setRecipient] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  const getData = async () => {
    setIsLoading(true);

    const query = {
      page: currentPage,
      perPage: DEFAULT.ROWS_PER_PAGE
    };

    const { data } = await RecipientService.getMany(query);

    setData(data.recipients);
    setTotal(data.total);
    setIsLoading(false);
  };

  const handleForm = (value) => {
    setRecipient(value);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container maxWidth="xl">
      <Header title={"Recipients"} />
      <Toolbar
        handleForm={handleForm}
        setIsEdit={setIsEdit}
        setElement={setRecipient}
      />
      <Table
        data={data}
        getData={getData}
        handleForm={handleForm}
        setIsEdit={setIsEdit}
        total={total}
        currentPage={currentPage}
        rowsPerPage={DEFAULT.ROWS_PER_PAGE}
        setCurrentPage={setCurrentPage}
      />
      <Modal
        name="recipient"
        handleModal={handleForm}
        isOpen={isOpen}
        isEdit={isEdit}
      >
        <Form
          recipient={recipient}
          handleForm={handleForm}
          getData={getData}
          isEdit={isEdit}
        />
      </Modal>
    </Container>
  );
};

Recipients.propTypes = {};

export default Recipients;
