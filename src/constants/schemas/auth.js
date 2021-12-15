// libraries
import * as yup from "yup";

// constants
import { AUTH } from "../messages";

const schemaSignIn = yup.object().shape({
  email: yup.string().email(AUTH.INVALID_EMAIL).required(AUTH.REQUIRED_EMAIL),
  password: yup.string().required(AUTH.REQUIRED_PASSWORD)
});

const schemaSignUp = yup.object().shape({
  name: yup.string().max(255).required(AUTH.REQUIRED_NAME),
  email: yup.string().email(AUTH.INVALID_EMAIL).required(AUTH.REQUIRED_EMAIL),
  password: yup
    .string()
    .min(4, AUTH.INVALID_PASSWORD)
    .max(255)
    .required(AUTH.REQUIRED_PASSWORD),
  confirmPassword: yup.string().required(AUTH.REQUIRED_CONFIRM_PASSWORD)
});

export { schemaSignIn, schemaSignUp };
