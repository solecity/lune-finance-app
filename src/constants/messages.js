const AUTH = {
  REQUIRED_NAME: "Name is a required field",
  REQUIRED_EMAIL: "Email is a required field",
  REQUIRED_PASSWORD: "Password is a required field",
  REQUIRED_CONFIRM_PASSWORD: "Confirm password is a required field",
  INVALID_EMAIL: "Invalid email",
  INVALID_PASSWORD: "Password needs to be at least 4 characters",
  INVALID_PASSWORDS: "Passwords don't match"
};

const ACCOUNT = {
  REQUIRED_NAME: "Name is a required field",
  REQUIRED_TYPE: "Type is a required field",
  REQUIRED_BALANCE: "Balance is a required field",
  INVALID_TYPE: "Invalid type value",
  INVALID_BALANCE: "Invalid balance value"
};

const CATEGORY = {
  REQUIRED_NAME: "Name is a required field",
  REQUIRED_TYPE: "Type is a required field",
  INVALID_TYPE: "Invalid type value",
  INVALID_MONTHLY_BUDGET: "Invalid monthly budget value",
  INVALID_COLOUR: "Invalid colour value"
};

const SUBCATEGORY = {
  REQUIRED_NAME: "Name is a required field"
};

const TRANSACTION = {
  REQUIRED_DATE: "Date is a required field",
  REQUIRED_TYPE: "Type is a required field",
  REQUIRED_CATEGORY: "Category is a required field",
  REQUIRED_SUBCATEGORY: "Sub-category is a required field",
  REQUIRED_FROM: "From is a required field",
  REQUIRED_TO: "To is a required field",
  REQUIRED_AMOUNT: "Amount is a required field",
  INVALID_TYPE: "Invalid type value",
  INVALID_AMOUNT: "Invalid amount value",
  INVALID_QUANTITY: "Invalid quantity value"
};

export { AUTH, ACCOUNT, CATEGORY, SUBCATEGORY, TRANSACTION };
