// base
import React, { useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// api
import DebtService from "shared/services/debt";

// external components
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";

// custom components
import {
  InputTextField,
  InputDatePicker,
  FormButton,
  ActionButton
} from "shared/components";

// styled components
import { StyledContainer, StyledGrid } from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

const Form = ({ debt, handleForm, getData, isEdit }) => {
  const settings = useRecoilValue(settingsState);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors }
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: debt.name || "",
      amount: debt.amount || 0,
      recipient: debt.recipient || "",
      deadline: debt.deadline || null
    }
  });

  const onSubmit = async (payload) => {
    const res = isEdit
      ? await DebtService.put(debt._id, payload)
      : await DebtService.post(payload);

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
        recipient: "",
        deadline: null
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
              error={Boolean(errors.recipient?.message)}
              helperText={errors.recipient?.message}
              control={control}
              label="Recipient *"
              name="recipient"
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
          <StyledGrid item xs={12} sm={6}>
            <InputDatePicker
              control={control}
              name="deadline"
              label="Deadline"
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
  debt: {}
};

Form.propTypes = {
  debt: PropTypes.object,
  handleForm: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired
};

export default Form;
