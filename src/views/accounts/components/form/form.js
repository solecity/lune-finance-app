// base
import React, { useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";
import { useForm } from "react-hook-form";

// api
import AccountService from "shared/services/account";

// external components
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";

// custom components
import {
  InputTextField,
  InputSelect,
  InputCheckbox,
  InputDatePicker,
  FormButton
} from "shared/components";

// styled components
import { StyledContainer, StyledCheckbox } from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

// constants
import { TYPES } from "constants/general";

const Form = ({ account, handleModal }) => {
  const settings = useRecoilValue(settingsState);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors }
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: account.name || "",
      type: account.type || "",
      balance: account.balance || 0,
      card: account.hasCard || false
    }
  });

  const onSubmit = async (payload) => {
    try {
      const res = await AccountService.post(payload);

      if (res) {
        handleModal();
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: "", type: 0, balance: 0, card: false });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <InputTextField
              error={Boolean(errors.name?.message)}
              helperText={errors.name?.message}
              control={control}
              label="Name"
              name="name"
              type="text"
            />
            <InputTextField
              error={Boolean(errors.balance?.message)}
              helperText={errors.balance?.message}
              control={control}
              label="Balance"
              name="balance"
              type="number"
              InputProps={{
                inputProps: { min: 0 },
                startAdornment: (
                  <InputAdornment position="start">
                    {settings.currencySymbol}
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <InputSelect label="Type" name="type" control={control}>
              {TYPES.ACCOUNT.map((el, i) => (
                <MenuItem key={i} value={el.value}>
                  {el.name}
                </MenuItem>
              ))}
            </InputSelect>
            <InputDatePicker
              control={control}
              name="openingDate"
              label="Opening Date"
            />
          </Grid>
          <StyledCheckbox item xs={12}>
            <InputCheckbox control={control} name="card" label="Has Card" />
          </StyledCheckbox>
        </Grid>
        <Grid container item spacing={1}>
          <Grid item xs={6}>
            <FormButton text="Cancel" />
          </Grid>
          <Grid item xs={6}>
            <FormButton text="Save" />
          </Grid>
        </Grid>
      </form>
    </StyledContainer>
  );
};

Form.defaultProps = {
  account: {}
};

Form.propTypes = {
  account: PropTypes.object,
  handleModal: PropTypes.func.isRequired
};

export default Form;
