// libraries
import * as yup from "yup";

// constants
import { VALIDATIONS } from "../general";
import { ACCOUNT } from "../messages";

const schemaAccount = yup.object().shape({
  name: yup.string().max(255).required(ACCOUNT.REQUIRED_NAME),
  type: yup
    .string()
    .oneOf(VALIDATIONS.ACCOUNT, (value) =>
      ACCOUNT.INVALID_TYPE(value.originalValue)
    )
    .typeError((value) => ACCOUNT.INVALID_TYPE(value.originalValue))
    .required(ACCOUNT.REQUIRED_TYPE),
  balance: yup
    .number()
    .min(0, ACCOUNT.INVALID_BALANCE)
    .typeError(ACCOUNT.INVALID_BALANCE)
    .required(ACCOUNT.REQUIRED_BALANCE),
  openingDate: yup.string().nullable(true),
  hasCard: yup.bool()
});

export { schemaAccount };
