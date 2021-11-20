// base
import React, { useState, useEffect } from "react";

// api
import GoalService from "shared/services/goal";

// external components
import Container from "@mui/material/Container";

// custom components
import { Header, Toolbar, Modal } from "shared/components";
import { Form, Cards } from "./components";

const Goals = () => {
  const [data, setData] = useState([]);
  const [goal, setGoal] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const getData = async () => {
    const { data } = await GoalService.getMany();

    setData(data.goals);
  };

  const handleForm = () => setIsOpen(!isOpen);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Header title={"Goals"} />
      <Toolbar
        handleForm={handleForm}
        setIsEdit={setIsEdit}
        setData={setGoal}
      />
      <Cards
        data={data}
        getData={getData}
        handleForm={handleForm}
        setGoal={setGoal}
        setIsEdit={setIsEdit}
      />
      <Modal
        name="goal"
        handleModal={handleForm}
        isOpen={isOpen}
        isEdit={isEdit}
      >
        <Form
          goal={goal}
          handleForm={handleForm}
          getData={getData}
          isEdit={isEdit}
        />
      </Modal>
    </Container>
  );
};

Goals.propTypes = {};

export default Goals;
