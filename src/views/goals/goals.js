// base
import React, { useState, useEffect } from "react";

// api
import GoalService from "shared/services/goal";

// external components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// custom components
import { Header, Toolbar, Modal, TabButton } from "shared/components";
import { FundsBar, Form, FundsList, Cards } from "./components";

// styled components
import { StyledTabs } from "./styles";

const tabs = ["Info", "Allocate"];

const Goals = () => {
  const [data, setData] = useState([]);
  const [goal, setGoal] = useState({});
  const [tab, setTab] = useState(0);
  const [selected, setSelected] = useState(tab);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const getData = async () => {
    const { data } = await GoalService.getMany();

    setData(data.goals);
  };

  const handleTab = (value) => {
    setTab(value);
    setSelected(value);
  };

  const handleForm = () => setIsOpen(!isOpen);

  const handleContent = () => {
    switch (tab) {
      case 0:
        return (
          <Form
            goal={goal}
            handleForm={handleForm}
            getData={getData}
            isEdit={isEdit}
          />
        );
      case 1:
        return <FundsList />;
      default:
        break;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container maxWidth="xl">
      <Header title={"Goals"} />
      <FundsBar />
      <Toolbar
        handleForm={handleForm}
        setIsEdit={setIsEdit}
        setElement={setGoal}
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
        <Container>
          <StyledTabs container spacing={1}>
            {tabs.map((tab, i) => (
              <Grid item xs={6} sm={4} md={2} key={i}>
                <TabButton
                  tab={i}
                  text={tab}
                  selected={selected}
                  action={() => handleTab(i)}
                />
              </Grid>
            ))}
          </StyledTabs>
        </Container>
        {handleContent()}
      </Modal>
    </Container>
  );
};

Goals.propTypes = {};

export default Goals;
