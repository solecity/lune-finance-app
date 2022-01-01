// base
import React, { useState, useEffect } from "react";

// api
import TransactionService from "shared/services/transaction";
import CategoryService from "../../shared/services/category";
import RecipientService from "../../shared/services/recipient";
import AccountService from "../../shared/services/account";
import DebtService from "../../shared/services/debt";
import ShopService from "../../shared/services/shop";

// external components
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// custom components
import { Header, Toolbar, Modal, TabButton } from "shared/components";
import { Form, Table } from "./components";

// styled components
import { StyledGrid, StyledTabs } from "./styles";

// constants
import { TYPES } from "constants/general";

const tabs = ["Expenses", "Income", "Savings", "Investments", "Transfer"];

const Transactions = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);
  const [savingsData, setSavingsData] = useState([]);
  const [investmentData, setInvestmentData] = useState([]);
  const [transferData, setTransferData] = useState([]);
  const [transaction, setTransaction] = useState({});
  const [categories, setCategories] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [debts, setDebts] = useState([]);
  const [shops, setShops] = useState([]);
  const [tab, setTab] = useState(0);
  const [selected, setSelected] = useState(tab);
  const [isOpen, setIsOpen] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [formType, setFormType] = useState("expense");

  const getData = async () => {
    setIsLoading(true);

    const { data } = await TransactionService.getMany();

    setIncomeData(data.transactions.income);
    setExpenseData(data.transactions.expense);
    setTransferData(data.transactions.transfer);
    setSavingsData(data.transactions.savings);
    setInvestmentData(data.transactions.investment);
    setIsLoading(false);
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

  const getShops = async () => {
    const { data } = await ShopService.getMany();

    setShops(data.shops);
  };

  const handleTab = (value) => {
    setTab(value);
    setSelected(value);
  };

  const handleContent = () => {
    let data = [];
    let isTransfer = false;

    switch (tab) {
      case 0:
        data = expenseData;
        isTransfer = false;
        break;
      case 1:
        data = incomeData;
        isTransfer = false;
        break;
      case 2:
        data = savingsData;
        isTransfer = true;
        break;
      case 3:
        data = investmentData;
        isTransfer = true;
        break;
      case 4:
        data = transferData;
        isTransfer = true;
        break;
      default:
        break;
    }

    return (
      <Table
        isTransfer={isTransfer}
        data={data}
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
    );
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
    getShops();
  }, []);

  return (
    <Container maxWidth="xl">
      <Header title={"Transactions"} />
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
          handleForm={() => handleAddForm(TYPES.TRANSACTION[selected].value)}
          setIsEdit={setIsEdit}
          setElement={setTransaction}
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
          shops={shops}
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
