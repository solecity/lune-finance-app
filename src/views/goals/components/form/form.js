// base
import React, { useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// api
import GoalService from "shared/services/goal";

// external components
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";

// custom components
import { InputTextField, FormButton, ActionButton } from "shared/components";

// styled components
import { StyledContainer, StyledGrid } from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

const Form = ({ goal, handleForm, getData, isEdit }) => {
  const settings = useRecoilValue(settingsState);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors }
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: goal.name || "",
      amount: goal.amount || 0,
      image: goal.image || ""
    }
  });

  const onSubmit = async (payload) => {
    const res = isEdit
      ? await GoalService.put(goal._id, payload)
      : await GoalService.post(payload);

    if (res) {
      handleForm();
      getData();
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        amount: 0,
        image: ""
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <StyledGrid item xs={12} sm={6}>
            <InputTextField
              error={Boolean(errors.name?.message)}
              helperText={errors.name?.message}
              control={control}
              label="Name *"
              name="name"
              type="text"
            />
          </StyledGrid>
          <StyledGrid item xs={12} sm={6}>
            <InputTextField
              error={Boolean(errors.amount?.message)}
              helperText={errors.amount?.message}
              control={control}
              label="Amount *"
              name="amount"
              type="text"
              InputProps={{
                inputProps: {
                  min: 0,
                  inputMode: "numeric",
                  pattern: "[+-]?([0-9]*[.])?[0-9]+"
                },
                startAdornment: (
                  <InputAdornment position="start">
                    {settings.currencySymbol}
                  </InputAdornment>
                )
              }}
            />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <InputTextField
              error={Boolean(errors.image?.message)}
              helperText={errors.image?.message}
              control={control}
              label="Image url"
              name="image"
              type="text"
            />
          </StyledGrid>
        </Grid>
        <Grid container item spacing={1}>
          <Grid item xs={12} sm={6}>
            <ActionButton text="Cancel" action={handleForm} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormButton text="Save" />
          </Grid>
        </Grid>
      </form>
    </StyledContainer>
  );
};

Form.defaultProps = {
  goal: {}
};

Form.propTypes = {
  goal: PropTypes.object,
  handleForm: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired
};

export default Form;
