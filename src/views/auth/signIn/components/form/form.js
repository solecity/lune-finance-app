// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// api
import { signIn } from "shared/recoil/auth";

// custom components
import {
  InputTextField,
  InputTextFieldIcon,
  InputCheckbox,
  DefaultButton
} from "shared/components";

// styled components
import {
  StyledContainer,
  StyledInputs,
  StyledText,
  StyledLink,
  StyledPasswordLink
} from "./styles";

// schemas
import { schemaSignIn } from "constants/schemas";

// utils
import { getEmail, setEmail } from "shared/utils/auth";

// atoms
import { isLoggedIn } from "shared/recoil/atoms";

// icons
import { Eye } from "shared/icons";

// TODO add toast general error message
// TODO forgot password flow
// TODO replace recoil with context
const Form = ({ onSubmitSuccess }) => {
  const setLoggedIn = useSetRecoilState(isLoggedIn);

  const [generalError, setGeneralError] = useState("");

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "" || getEmail(),
      password: "1234",
      rememberEmail: Boolean(getEmail())
    },
    resolver: yupResolver(schemaSignIn)
  });

  const email = watch("email");
  const password = watch("password");

  const onSubmit = async (payload) => {
    try {
      if (payload.rememberEmail) setEmail(email);

      const res = await signIn(payload);

      if (res.success) {
        setLoggedIn(true);

        onSubmitSuccess();
      } else {
        setGeneralError(res);
      }
    } catch (err) {
      console.log("Server down", err);
    }
  };

  useEffect(() => {
    if (email || password) setGeneralError("");
  }, [password]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledContainer>
        <StyledInputs>
          <InputTextField
            label="Email"
            name="email"
            type="email"
            control={control}
            error={Boolean(errors.email?.message) || Boolean(generalError)}
            helperText={errors.email?.message}
          />

          <InputTextFieldIcon
            label="Password"
            name="password"
            type="password"
            icon={Eye}
            control={control}
            error={Boolean(errors.password?.message) || Boolean(generalError)}
            helperText={errors.password?.message}
          />
        </StyledInputs>

        <InputCheckbox
          label="Remember my email"
          name="rememberEmail"
          control={control}
        />
        <StyledPasswordLink>
          <StyledLink>Forgot password?</StyledLink>
        </StyledPasswordLink>

        <DefaultButton type="submit" text="Sign In" />

        <StyledText>
          Don't have an account?{" "}
          <StyledLink href="/sign-up">Sign up</StyledLink>
        </StyledText>
      </StyledContainer>
    </form>
  );
};

Form.defaultProps = {
  onSubmitSuccess: () => {}
};

Form.propTypes = {
  onSubmitSuccess: PropTypes.func
};

export default Form;
