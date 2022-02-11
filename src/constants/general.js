// theme
import themes from "styles/theme";

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
  WHITE: themes.light.colours.white,
  SECONDARY_LIGHT: themes.light.colours.secondary,
  SECONDARY_DARK: themes.dark.colours.secondary,
  ACCENT_LIGHT: themes.light.colours.accent,
  ACCENT_DARK: themes.light.colours.accent,
  BOX_SHADOW: themes.light.colours.boxShadow
};

const VALIDATIONS = {
  ACCOUNT: ["cash", "bank", "savings", "investment"],
  CATEGORY: ["income", "expense"],
  TRANSACTION: ["expense", "income", "transfer", "savings", "investment"]
};

export { DATE_FORMAT, CONSTANTS, DEFAULT, TYPES, COLOURS, VALIDATIONS };
