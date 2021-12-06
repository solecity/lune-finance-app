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

const tabs = ["Outcome", "Income"];

const Categories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [expenseData, setExpenseData] = useState([]);
  const [incomeData, setIncomeData] = useState([]);
  const [category, setCategory] = useState({});
  const [formType, setFormType] = useState("");
  const [tab, setTab] = useState(0);
  const [selected, setSelected] = useState(tab);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const getData = async () => {
    setIsLoading(true);

    const { data } = await CategoryService.getMany();
    const { expense, income } = data.categories;

    setExpenseData(expense);
    setIncomeData(income);
    setIsLoading(false);
  };

  const handleTab = (value) => {
    setTab(value);
    setSelected(value);
  };

  const handleContent = () => {
    let data = [];

    switch (tab) {
      case 0:
        data = expenseData;
        break;
      case 1:
        data = incomeData;
        break;
      default:
        break;
    }

    return (
      <Cards
        data={data}
        getData={getData}
        handleForm={handleForm}
        setCategory={setCategory}
        setIsEdit={setIsEdit}
      />
    );
  };

  const handleForm = () => setIsOpen(!isOpen);

  const handleAddForm = (type) => {
    setFormType(type);
    setCategory({});

    handleForm();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container maxWidth="xl">
      <Header title={"Categories"} />
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
          handleContent()
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
