// base
import React, { useState, useEffect } from "react";

// api
import CategoryService from "shared/services/category";

// external components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

// custom components
import { Header, Modal, IconButton } from "shared/components";
import { Form, Cards } from "./components";
import { PlusCircle } from "@styled-icons/boxicons-solid/PlusCircle";

// styled components
import { StyledContainer, StyledSubTitle, StyledIconButton } from "./styles";

// constants
import { TYPES } from "constants/general";

const Categories = () => {
  const [expenseCategories, setExpenseCategories] = useState([]);
  const [incomeCategories, setIncomeCategories] = useState([]);
  const [category, setCategory] = useState({});
  const [formType, setFormType] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const getData = async () => {
    const { data } = await CategoryService.getMany();
    const { expense, income } = data.categories;

    setExpenseCategories(expense);
    setIncomeCategories(income);
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
      <StyledContainer container spacing={1} direction="column">
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
            data={expenseCategories}
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
            data={incomeCategories}
            getData={getData}
            handleForm={handleForm}
            setCategory={setCategory}
            setIsEdit={setIsEdit}
          />
        </Grid>
      </StyledContainer>
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
