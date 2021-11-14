// libraries
import * as yup from "yup";

// constants
import { SIGNIN } from "../messages";

const signIn = yup.object().shape({
  password: yup.string().max(255).required(SIGNIN.PASSWORD_REQUIRED)
});

export default signIn;
