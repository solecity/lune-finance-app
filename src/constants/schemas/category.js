// libraries
import * as yup from "yup";

// constants
import { VALIDATIONS } from "../general";
import { CATEGORY } from "../messages";

const schemaCategory = yup.object().shape({
  name: yup.string().max(255).required(CATEGORY.REQUIRED_NAME),
  type: yup
    .string()
    .oneOf(VALIDATIONS.CATEGORY, (value) =>
      CATEGORY.INVALID_TYPE(value.originalValue)
    )
    .typeError((value) => CATEGORY.INVALID_TYPE(value.originalValue))
    .required(CATEGORY.REQUIRED_TYPE),
  monthlyBudget: yup
    .number()
    .min(0, CATEGORY.INVALID_MONTHLY_BUDGET)
    .typeError(CATEGORY.INVALID_MONTHLY_BUDGET),
  colour: yup.string().typeError(CATEGORY.INVALID_COLOUR)
});

export default schemaCategory;
