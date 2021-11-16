// base
import React, { useState, useEffect } from "react";

// api
import RecipientService from "shared/services/recipient";

// custom components
import { Modal } from "shared/components";
import { Toolbar, Form, Table } from "./components";

// styled components
import { StyledContainer } from "./styles";

const Recipients = () => {
  const [data, setData] = useState([]);
  const [recipient, setRecipient] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const getData = async () => {
    const { data } = await RecipientService.getMany();

    setData(data.recipients);
  };

  const handleForm = (value) => {
    setRecipient(value);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledContainer>
      <Toolbar handleForm={handleForm} setIsEdit={setIsEdit} />
      <Table
        data={data}
        getData={getData}
        handleForm={handleForm}
        setIsEdit={setIsEdit}
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
    </StyledContainer>
  );
};

Recipients.propTypes = {};

export default Recipients;
