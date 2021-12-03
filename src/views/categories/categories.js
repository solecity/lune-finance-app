// base
import React, { useState, useEffect } from "react";

// api
import CategoryService from "shared/services/category";

// external components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { PlusCircle } from "@styled-icons/boxicons-solid/PlusCircle";

// custom components
import {
  Header,
  Toolbar,
  Modal,
  TabButton,
  IconButton
} from "shared/components";
import { Form, Cards } from "./components";

// styled components
import { StyledTabs, StyledSubTitle, StyledIconButton } from "./styles";

// constants
import { CONSTANTS, TYPES } from "constants/general";

const Categories = () => {
  const [expenseData, setExpenseData] = useState([]);
  const [incomeData, setIncomeData] = useState([]);
  const [category, setCategory] = useState({});
  const [formType, setFormType] = useState("");
  const [tab, setTab] = useState(0);
  const [selected, setSelected] = useState(tab);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const getData = async () => {
    const { data } = await CategoryService.getMany();
    const { expense, income } = data.categories;

    setExpenseData(expense);
    setIncomeData(income);
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
    <Container>
      <Header title={"Categories"} />
      <Grid item>
        <Divider />
      </Grid>
      <Grid item></Grid>
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
