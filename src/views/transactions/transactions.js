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
import { DEFAULT } from "constants/general";

const tabs = [
  { value: "expense", label: "Expenses" },
  { value: "income", label: "Income" },
  { value: "savings", label: "Savings" },
  { value: "investments", label: "Investments" },
  { value: "transfer", label: "Transfer" }
];

const Transactions = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [transaction, setTransaction] = useState({});
  const [categories, setCategories] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [debts, setDebts] = useState([]);
  const [shops, setShops] = useState([]);
  const [tab, setTab] = useState("expense");
  const [selected, setSelected] = useState(tab);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  const getData = async () => {
    setIsLoading(true);

    const query = {
      type: selected,
      page: currentPage,
      perPage: DEFAULT.ROWS_PER_PAGE
    };

    const { data } = await TransactionService.getMany(query);

    setData(data.transactions);
    setTotal(data.total);
    setIsLoading(false);
  };

  const getCategories = async () => {
    const { data } = await CategoryService.getMany();

    setCategories(data.categories);
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

  const handleTab = async (value) => {
    setTab(value);
    setSelected(value);
  };

  const handleContent = () => {
    let isTransfer = false;

    switch (selected) {
      case "expense":
      case "income":
        isTransfer = false;
        break;
      case "transfer":
      case "savings":
      case "investments":
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
        handleForm={handleForm}
        setIsEdit={setIsEdit}
        total={total}
        currentPage={currentPage}
        rowsPerPage={DEFAULT.ROWS_PER_PAGE}
        setCurrentPage={setCurrentPage}
      />
    );
  };

  const handleForm = () => setIsOpen(!isOpen);

  const handleAddForm = () => {
    setTransaction({});

    handleForm();
  };

  useEffect(() => {
    getCategories();
    getRecipients();
    getAccounts();
    getDebts();
    getShops();
  }, []);

  useEffect(() => {
    getData();
  }, [currentPage, selected]);

  return (
    <Container maxWidth="xl">
      <Header title={"Transactions"} />
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
          handleForm={handleAddForm}
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
          formType={selected}
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
