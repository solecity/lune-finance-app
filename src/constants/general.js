// theme
import { Light, Dark } from "styles/theme";

const DATE_FORMAT = "dd/MM/yyyy";

const IMG = "/static/images/no-image.png";

const CONSTANTS = {
  YES: "Yes",
  NO: "No",
  PAYED: "Payed",
  NOT_PAYED: "Not payed",
  COMPLETED: "Completed",
  NOT_COMPLETED: "Not completed",
  DEFAULT_COLOUR: "#c1c1c1",
  LIGHT: "light",
  DARK: "dark",
  INITIAL_ACCOUNT_TYPE: "cash",
  INITIAL_LANGUAGE: "en",
  EXPENSE: "expense",
  INCOME: "income",
  OUTCOME: "outcome"
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

export { DATE_FORMAT, IMG, CONSTANTS, TYPES, COLOURS, VALIDATIONS };
