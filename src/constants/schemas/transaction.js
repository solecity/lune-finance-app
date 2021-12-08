// libraries
import * as yup from "yup";

// constants
import { CONSTANTS, VALIDATIONS } from "../general";
import { TRANSACTION } from "../messages";

const schemaTransaction = yup.object().shape({
  date: yup.string().required(TRANSACTION.REQUIRED_DATE),
  type: yup
    .string()
    .oneOf(VALIDATIONS.TRANSACTION, (value) =>
      TRANSACTION.INVALID_TYPE(value.originalValue)
    )
    .typeError((value) => TRANSACTION.INVALID_TYPE(value.originalValue))
    .required(TRANSACTION.REQUIRED_TYPE),
  category: yup.string().when("type", {
    is: CONSTANTS.EXPENSE || CONSTANTS.INCOME,
    then: yup.string().required(TRANSACTION.REQUIRED_CATEGORY)
  }),
  subcategory: yup.string().when("type", {
    is: CONSTANTS.EXPENSE || CONSTANTS.INCOME,
    then: yup.string().required(TRANSACTION.REQUIRED_SUBCATEGORY)
  }),
  from: yup.string().when("type", {
    is: !CONSTANTS.EXPENSE && !CONSTANTS.INCOME,
    then: yup.string().required(TRANSACTION.REQUIRED_FROM)
  }),
  to: yup.string().when("type", {
    is: !CONSTANTS.EXPENSE && !CONSTANTS.INCOME,
    then: yup.string().required(TRANSACTION.REQUIRED_TO)
  }),
  recipient: yup.string(),
  account: yup.string(),
  description: yup.string().max(255),
  amount: yup
    .number()
    .min(0, TRANSACTION.INVALID_AMOUNT)
    .typeError(TRANSACTION.INVALID_AMOUNT)
    .required(TRANSACTION.REQUIRED_AMOUNT),
  quantity: yup
    .number()
    .min(0, TRANSACTION.INVALID_QUANTITY)
    .typeError(TRANSACTION.INVALID_QUANTITY)
});

export { schemaTransaction };
