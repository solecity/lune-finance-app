// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// external components
import Grid from "@mui/material/Grid";

// custom components
import { InputTextField, FormButton } from "shared/components";

// api
import { signIn } from "shared/recoil/auth";

// schemas
import { schemaSignIn } from "constants/schemas";

// atoms
import { isLoggedIn } from "shared/recoil/atoms";

const SignInForm = ({ onSubmitSuccess }) => {
  const setLoggedIn = useSetRecoilState(isLoggedIn);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      password: ""
    },
    resolver: yupResolver(schemaSignIn)
  });

  const onSubmit = async ({ password }) => {
    const res = await signIn({ password });

    if (res.success) {
      setLoggedIn(true);

      onSubmitSuccess();
    }
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputTextField
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            control={control}
            label="Password"
            name="password"
            type="password"
          />
          <FormButton variant="contained" text="Sign In" />
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
