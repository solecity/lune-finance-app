// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// api
import { signUp } from "shared/recoil/auth";
import { saveUser } from "shared/recoil/user";
import { saveSettings } from "shared/recoil/settings";

// external components
import Grid from "@mui/material/Grid";

// custom components
import { InputTextField, FormButton } from "shared/components";

// styled components
import { StyledGrid } from "./styles";

// schemas
import { AUTH } from "constants/messages";
import { schemaSignUp } from "constants/schemas";

// atoms
import { isLoggedIn } from "shared/recoil/atoms";

const Form = ({ onSubmitSuccess }) => {
  const setLoggedIn = useSetRecoilState(isLoggedIn);

  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    resolver: yupResolver(schemaSignUp)
  });

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit = async (payload) => {
    try {
      const passwordsMatch = password === confirmPassword;

      console.log({ passwordsMatch });

      if (passwordsMatch) {
        const res = await signUp(payload);
        console.log(res);
        if (res.success) {
          setLoggedIn(true);

          const user = await saveUser();

          saveSettings(user._id);

          onSubmitSuccess();
        } else {
          setEmailError(res);
        }
      } else {
        setPasswordError(AUTH.INVALID_PASSWORDS);
        console.log({ passwordError });
        console.log(AUTH.INVALID_PASSWORDS);
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (password || confirmPassword) setPasswordError("");
  }, [password, confirmPassword]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <StyledGrid item xs={12} sm={6}>
          <InputTextField
            error={Boolean(errors.name?.message)}
            helperText={errors.name?.message}
            control={control}
            label="Name *"
            name="name"
            type="name"
          />
        </StyledGrid>
        <StyledGrid item xs={12} sm={6}>
          <InputTextField
            error={Boolean(errors.email?.message) || Boolean(emailError)}
            helperText={errors.email?.message || emailError}
            control={control}
            label="Email *"
            name="email"
            type="email"
          />
        </StyledGrid>
        <StyledGrid item xs={12} sm={6}>
          <InputTextField
            error={Boolean(errors.password?.message) || Boolean(passwordError)}
            helperText={errors.password?.message}
            control={control}
            label="Password *"
            name="password"
            type="password"
          />
        </StyledGrid>
        <StyledGrid item xs={12} sm={6}>
          <InputTextField
            error={
              Boolean(errors.confirmPassword?.message) || Boolean(passwordError)
            }
            helperText={errors.confirmPassword?.message || passwordError}
            control={control}
            label="Confirm Password *"
            name="confirmPassword"
            type="password"
          />
        </StyledGrid>
      </Grid>
      <FormButton text="Sign Up" />
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
