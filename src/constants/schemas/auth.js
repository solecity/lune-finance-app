// libraries
import * as yup from "yup";

// constants
import { AUTH } from "../messages";

const schemaSignIn = yup.object().shape({
  email: yup.string().email(AUTH.INVALID_EMAIL).required(AUTH.REQUIRED_EMAIL),
  password: yup.string().required(AUTH.REQUIRED_PASSWORD)
});

export { schemaSignIn };
