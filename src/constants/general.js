// theme
import { Light, Dark } from "styles/theme";

const DATE_FORMAT = "dd/MM/yyyy";

const CONSTANTS = {
  YES: "Yes",
  NO: "No",
  PAYED: "Payed",
  NOT_PAYED: "Not payed",
  COMPLETED: "Completed",
  NOT_COMPLETED: "Not completed",
  LIGHT: "light",
  DARK: "dark",
  EXPENSE: "expense",
  INCOME: "income",
  OUTCOME: "outcome",
  INVESTMENT: "investment"
};

const DEFAULT = {
  COLOUR: "#c1c1c1",
  THEME: "light",
  ACCOUNT_TYPE: "cash",
  LANGUAGE: "en",
  ROWS_PER_PAGE: 15
};

const TYPES = {
  CATEGORY: [
    { value: "expense", name: "Expense" },
    { value: "income", name: "Income" }
  ],
  TRANSACTION: [
    { value: "expense", name: "Expense" },
    { value: "income", name: "Income" },
    { value: "savings", name: "Savings" },
    { value: "investment", name: "Investment" },
    { value: "transfer", name: "Transfer" }
  ],
  ACCOUNT: [
    { value: "cash", name: "Cash" },
    { value: "bank", name: "Bank" },
    { value: "savings", name: "Savings" },
    { value: "investment", name: "Investment" }
  ]
};

const COLOURS = {
  WHITE: Light.colours.white,
  SECONDARY_LIGHT: Light.colours.secondary,
  SECONDARY_DARK: Dark.colours.secondary,
  ACCENT_LIGHT: Light.colours.accent,
  ACCENT_DARK: Light.colours.accent,
  BOX_SHADOW: Light.colours.boxShadow
};

const VALIDATIONS = {
  ACCOUNT: ["cash", "bank", "savings", "investment"],
  CATEGORY: ["income", "expense"],
  TRANSACTION: ["expense", "income", "transfer", "savings", "investment"]
};

export { DATE_FORMAT, CONSTANTS, DEFAULT, TYPES, COLOURS, VALIDATIONS };
