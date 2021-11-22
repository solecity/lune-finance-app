// base
import React, { useState, useEffect } from "react";

// api
import TransactionService from "shared/services/transaction";
import CategoryService from "../../shared/services/category";
import RecipientService from "../../shared/services/recipient";
import AccountService from "../../shared/services/account";
import DebtService from "../../shared/services/debt";

// external components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { PlusCircle } from "@styled-icons/boxicons-solid/PlusCircle";

// custom components
import { Header, Modal, IconButton } from "shared/components";
import { Form, Table } from "./components";

// styled components
import { StyledGrid, StyledSubTitle, StyledIconButton } from "./styles";

// constants
import { TYPES } from "constants/general";

const Transactions = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [outcomeData, setOutcomeData] = useState([]);
  const [transferData, setTransferData] = useState([]);
  const [savingsData, setSavingsData] = useState([]);
  const [investmentData, setInvestmentData] = useState([]);
  const [transaction, setTransaction] = useState({});
  const [categories, setCategories] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [debts, setDebts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [formType, setFormType] = useState("expense");

  const getData = async () => {
    const { data } = await TransactionService.getMany();

    setIncomeData(data.transactions.income);
    setOutcomeData(data.transactions.expense);
    setTransferData(data.transactions.transfer);
    setSavingsData(data.transactions.savings);
    setInvestmentData(data.transactions.investment);
  };

  const getCategories = async () => {
    const { data } = await CategoryService.getMany();
    const arr = data.categories.expense.concat(data.categories.income);

    setCategories(arr);
  };

  const getRecipients = async () => {
    const { data } = await RecipientService.getMany();

    setRecipients(data.recipients);
  };

  const getAccounts = async () => {
    const { data } = await AccountService.getMany();

    setAccounts(data.accounts);
  };

  const getDebts = async () => {
    const { data } = await DebtService.getMany();

    setDebts(data.debts);
  };

  const handleForm = () => setIsOpen(!isOpen);

  const handleAddForm = (type) => {
    setFormType(type);
    setTransaction({});

    handleForm();
  };

  useEffect(() => {
    getData();
    getCategories();
    getRecipients();
    getAccounts();
    getDebts();
  }, []);

  return (
    <Container>
      <Header title={"Transactions"} />
      <Grid container spacing={1} direction="column">
        <StyledGrid item>
          <StyledSubTitle>
            <Grid container alignItems="center">
              <Grid item xs={11}>
                <Typography variant="body1">Outcome</Typography>
              </Grid>
              <StyledIconButton item xs={1}>
                <IconButton
                  tooltip="Add"
                  icon={<PlusCircle />}
                  action={() => handleAddForm(TYPES.TRANSACTION[1].value)}
                />
              </StyledIconButton>
            </Grid>
          </StyledSubTitle>
          <Table
            data={outcomeData}
            getData={getData}
            categories={categories}
            recipients={recipients}
            accounts={accounts}
            debts={debts}
            transaction={transaction}
            setTransaction={setTransaction}
            setIsEdit={setIsEdit}
            handleForm={handleForm}
          />
        </StyledGrid>
        <Grid item>
          <Divider />
        </Grid>
        <StyledGrid item>
          <StyledSubTitle>
            <Grid container alignItems="center">
              <Grid item xs={11}>
                <Typography variant="body1">Income</Typography>
              </Grid>
              <StyledIconButton item xs={1}>
                <IconButton
                  tooltip="Add"
                  icon={<PlusCircle />}
                  action={() => handleAddForm(TYPES.TRANSACTION[0].value)}
                />
              </StyledIconButton>
            </Grid>
          </StyledSubTitle>
          <Table
            data={incomeData}
            getData={getData}
            categories={categories}
            recipients={recipients}
            accounts={accounts}
            debts={debts}
            transaction={transaction}
            setTransaction={setTransaction}
            setIsEdit={setIsEdit}
            handleForm={handleForm}
          />
        </StyledGrid>
        <Grid item>
          <Divider />
        </Grid>
        <StyledGrid item>
          <StyledSubTitle>
            <Grid container alignItems="center">
              <Grid item xs={11}>
                <Typography variant="body1">Savings</Typography>
              </Grid>
              <StyledIconButton item xs={1}>
                <IconButton
                  tooltip="Add"
                  icon={<PlusCircle />}
                  action={() => handleAddForm(TYPES.TRANSACTION[3].value)}
                />
              </StyledIconButton>
            </Grid>
          </StyledSubTitle>
          <Table
            isTransfer={true}
            data={savingsData}
            getData={getData}
            accounts={accounts}
            transaction={transaction}
            setTransaction={setTransaction}
            setIsEdit={setIsEdit}
            handleForm={handleForm}
          />
        </StyledGrid>
        <Grid item>
          <Divider />
        </Grid>
        <StyledGrid item>
          <StyledSubTitle>
            <Grid container alignItems="center">
              <Grid item xs={11}>
                <Typography variant="body1">Investments</Typography>
              </Grid>
              <StyledIconButton item xs={1}>
                <IconButton
                  tooltip="Add"
                  icon={<PlusCircle />}
                  action={() => handleAddForm(TYPES.TRANSACTION[4].value)}
                />
              </StyledIconButton>
            </Grid>
          </StyledSubTitle>
          <Table
            isTransfer={true}
            data={investmentData}
            getData={getData}
            accounts={accounts}
            transaction={transaction}
            setTransaction={setTransaction}
            setIsEdit={setIsEdit}
            handleForm={handleForm}
          />
        </StyledGrid>
        <Grid item>
          <Divider />
        </Grid>
        <StyledGrid item>
          <StyledSubTitle>
            <Grid container alignItems="center">
              <Grid item xs={11}>
                <Typography variant="body1">Transfer</Typography>
              </Grid>
              <StyledIconButton item xs={1}>
                <IconButton
                  tooltip="Add"
                  icon={<PlusCircle />}
                  action={() => handleAddForm(TYPES.TRANSACTION[2].value)}
                />
              </StyledIconButton>
            </Grid>
          </StyledSubTitle>
          <Table
            isTransfer={true}
            data={transferData}
            getData={getData}
            accounts={accounts}
            transaction={transaction}
            setTransaction={setTransaction}
            setIsEdit={setIsEdit}
            handleForm={handleForm}
          />
        </StyledGrid>
      </Grid>
      <Modal
        name="transaction"
        handleModal={handleForm}
        isOpen={isOpen}
        isEdit={isEdit}
      >
        <Form
          formType={formType}
          transaction={transaction}
          categories={categories}
          recipients={recipients}
          accounts={accounts}
          debts={debts}
          getData={getData}
          handleForm={handleForm}
          isEdit={isEdit}
        />
      </Modal>
    </Container>
  );
};

Transactions.propTypes = {};

export default Transactions;
