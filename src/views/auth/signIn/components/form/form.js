// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// api
import { signIn } from "shared/recoil/auth";
import { saveUser } from "shared/recoil/user";
import { saveSettings } from "shared/recoil/settings";

// external components
import Grid from "@mui/material/Grid";

// custom components
import { FormButton } from "shared/components";

// styled components
import { StyledInputTextField } from "./styles";

// schemas
import { schemaSignIn } from "constants/schemas";

// atoms
import { isLoggedIn } from "shared/recoil/atoms";

const SignInForm = ({ onSubmitSuccess }) => {
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
      password: ""
    },
    resolver: yupResolver(schemaSignIn)
  });

  const password = watch("password");

  const onSubmit = async ({ password }) => {
    try {
      const res = await signIn({ password });
      if (res.success) {
        setLoggedIn(true);

        const user = await saveUser();

        saveSettings(user._id);

        onSubmitSuccess();
      } else {
        setGeneralError(res);
      }
    } catch (err) {
      console.log("Server down");
    }
  };

  useEffect(() => {
    if (password) setGeneralError("");
  }, [password]);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInputTextField
            error={Boolean(errors.password?.message) || Boolean(generalError)}
            helperText={errors.password?.message || generalError}
            control={control}
            label="Password"
            name="password"
            type="password"
          />
          <FormButton text="Sign In" />
        </form>
      </Grid>
    </Grid>
  );
};

SignInForm.defaultProps = {
  onSubmitSuccess: () => {}
};

SignInForm.propTypes = {
  onSubmitSuccess: PropTypes.func
};

export default SignInForm;
