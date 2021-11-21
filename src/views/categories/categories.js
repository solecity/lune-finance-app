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
import { Header, Modal, IconButton } from "shared/components";
import { Form, Cards } from "./components";

// styled components
import { StyledSubTitle, StyledIconButton } from "./styles";

// constants
import { TYPES } from "constants/general";

const Categories = () => {
  const [expenseData, setExpenseData] = useState([]);
  const [incomeData, setIncomeData] = useState([]);
  const [category, setCategory] = useState({});
  const [formType, setFormType] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const getData = async () => {
    const { data } = await CategoryService.getMany();
    const { expense, income } = data.categories;

    setExpenseData(expense);
    setIncomeData(income);
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
      <Grid container spacing={1} direction="column">
        <Grid item>
          <StyledSubTitle>
            <Grid container alignItems="center">
              <Grid item xs={11}>
                <Typography variant="body1">Outcome</Typography>
              </Grid>
              <StyledIconButton item xs={1}>
                <IconButton
                  tooltip="Add"
                  icon={<PlusCircle />}
                  action={() => handleAddForm(TYPES.CATEGORY[1].value)}
                />
              </StyledIconButton>
            </Grid>
          </StyledSubTitle>
          <Cards
            data={expenseData}
            getData={getData}
            handleForm={handleForm}
            setCategory={setCategory}
            setIsEdit={setIsEdit}
          />
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
        <Grid item>
          <StyledSubTitle>
            <Grid container alignItems="center">
              <Grid item xs={11}>
                <Typography variant="body1">Income</Typography>
              </Grid>
              <StyledIconButton item xs={1}>
                <IconButton
                  tooltip={"Add"}
                  icon={<PlusCircle />}
                  action={() => handleAddForm(TYPES.CATEGORY[0].value)}
                />
              </StyledIconButton>
            </Grid>
          </StyledSubTitle>
          <Cards
            data={incomeData}
            getData={getData}
            handleForm={handleForm}
            setCategory={setCategory}
            setIsEdit={setIsEdit}
          />
        </Grid>
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
