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
  FormButton
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

// atoms
import { isLoggedIn } from "shared/recoil/atoms";

// icons
import { Eye } from "shared/icons";

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
      email: "test@lune.com",
      password: "1234"
    },
    resolver: yupResolver(schemaSignIn)
  });

  const email = watch("email");
  const password = watch("password");

  const onSubmit = async (payload) => {
    try {
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
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          control={control}
          label="Remember my email"
          name="rememberEmail"
        />
        <StyledPasswordLink>
          <StyledLink>Forgot password?</StyledLink>
        </StyledPasswordLink>
        <FormButton text="Sign In" />
        {/* <StyledText>
          Don't have an account?{" "}
          <StyledLink href="/sign-up">Sign up</StyledLink>
        </StyledText> */}
      </form>
    </StyledContainer>
  );
};

Form.defaultProps = {
  onSubmitSuccess: () => {}
};

Form.propTypes = {
  onSubmitSuccess: PropTypes.func
};

export default Form;
