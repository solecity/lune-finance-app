const DATE_FORMAT = "dd/MM/yyyy";

const CONSTANTS = {
  YES: "Yes",
  NO: "No",
  PAYED: "Payed",
  NOT_PAYED: "Not payed",
  COMPLETED: "Completed",
  NOT_COMPLETED: "Not completed",
  INITIAL_ACCOUNT_TYPE: "cash",
  DEFAULT_COLOUR: "#c1c1c1"
};

const TYPES = {
  CATEGORY: [
    { value: "income", name: "Income" },
    { value: "expense", name: "Expense" }
  ],
  TRANSACTION: [
    { value: "income", name: "Income" },
    { value: "expense", name: "Expense" },
    { value: "transfer", name: "Transfer" },
    { value: "savings", name: "Savings" },
    { value: "investment", name: "Investment" }
  ],
  ACCOUNT: [
    { value: "cash", name: "Cash" },
    { value: "bank", name: "Bank" },
    { value: "savings", name: "Savings" },
    { value: "investment", name: "Investment" }
  ]
};

const VALIDATIONS = {
  ACCOUNT: ["cash", "bank", "savings", "investment"]
};

export { DATE_FORMAT, CONSTANTS, TYPES, VALIDATIONS };
