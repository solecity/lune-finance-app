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
import { InputTextField, FormButton } from "shared/components";

// styled components
import { StyledGrid } from "./styles";

// schemas
import { schemaSignIn } from "constants/schemas";

// atoms
import { isLoggedIn } from "shared/recoil/atoms";

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
      email: "",
      password: ""
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
    if (email || password) setGeneralError("");
  }, [password]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <StyledGrid item xs={12}>
          <InputTextField
            error={Boolean(errors.email?.message) || Boolean(generalError)}
            helperText={errors.email?.message}
            control={control}
            label="Email"
            name="email"
            type="email"
          />
        </StyledGrid>
        <StyledGrid item xs={12}>
          <InputTextField
            error={Boolean(errors.password?.message) || Boolean(generalError)}
            helperText={errors.password?.message || generalError}
            control={control}
            label="Password"
            name="password"
            type="password"
          />
        </StyledGrid>
      </Grid>
      <FormButton text="Sign In" />
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
