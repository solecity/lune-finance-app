// base
import React, { useState, useEffect } from "react";

// api
import CategoryService from "shared/services/category";

// external components
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// custom components
import { Header, Toolbar, Modal, TabButton } from "shared/components";
import { Form, Cards } from "./components";

// styled components
import { StyledGrid, StyledTabs } from "./styles";

// constants
import { TYPES } from "constants/general";

const tabs = [
  { value: "expense", label: "Outcome" },
  { value: "income", label: "Income" }
];

const Categories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState({});
  const [formType, setFormType] = useState("");
  const [tab, setTab] = useState("expense");
  const [selected, setSelected] = useState(tab);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    console.log(selected);
    const { data } = await CategoryService.getMany({ type: selected });

    setData(data.categories);
    setIsLoading(false);
  };

  const handleTab = (value) => {
    setTab(value);
    setSelected(value);
  };

  const handleForm = () => setIsOpen(!isOpen);

  const handleAddForm = (type) => {
    setFormType(type);
    setCategory({});

    handleForm();
  };

  useEffect(() => {
    getData();
  }, [selected]);

  return (
    <Container maxWidth="xl">
      <Header title={"Categories"} />
      <StyledTabs container spacing={1}>
        {tabs.map((tab, i) => (
          <Grid item xs={6} sm={4} md={2} key={i}>
            <TabButton
              tab={tab.value}
              text={tab.label}
              selected={selected}
              action={() => handleTab(tab.value)}
            />
          </Grid>
        ))}
      </StyledTabs>
      <Grid item>
        <Divider />
      </Grid>
      <Grid item>
        <Toolbar
          handleForm={() => handleAddForm(TYPES.CATEGORY[selected].value)}
          setIsEdit={setIsEdit}
          setElement={setCategory}
        />
      </Grid>
      <Grid item>
        {isLoading ? (
          <StyledGrid container>
            <CircularProgress />
          </StyledGrid>
        ) : (
          <Cards
            data={data}
            getData={getData}
            handleForm={handleForm}
            setCategory={setCategory}
            setIsEdit={setIsEdit}
          />
        )}
      </Grid>
      <Modal
        name="category"
        handleModal={handleForm}
        isOpen={isOpen}
        isEdit={isEdit}
      >
        <Form
          formType={formType}
          category={category}
          handleForm={handleForm}
          getData={getData}
          isEdit={isEdit}
        />
      </Modal>
    </Container>
  );
};

Categories.propTypes = {};

export default Categories;
