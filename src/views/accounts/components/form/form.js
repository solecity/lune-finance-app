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
import { InputCheckbox, FormButton, ActionButton } from "shared/components";

// styled components
import {
  StyledContainer,
  StyledInputTextField,
  StyledInputSelect,
  StyledInputDatePicker,
  StyledCheckbox
} from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

// constants
import { CONSTANTS, TYPES } from "constants/general";

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
      type: account.type || CONSTANTS.INITIAL_ACCOUNT_TYPE,
      balance: account.balance || 0,
      openingDate: account.openingDate || new Date(),
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
      reset({
        name: "",
        type: CONSTANTS.INITIAL_ACCOUNT_TYPE,
        balance: 0,
        openingDate: new Date(),
        card: false
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <StyledInputTextField
              error={Boolean(errors.name?.message)}
              helperText={errors.name?.message}
              control={control}
              label="Name"
              name="name"
              type="text"
            />
            <StyledInputTextField
              error={Boolean(errors.balance?.message)}
              helperText={errors.balance?.message}
              control={control}
              label="Initial Balance"
              name="balance"
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledInputSelect label="Type" name="type" control={control}>
              {TYPES.ACCOUNT.map((el, i) => (
                <MenuItem key={i} value={el.value}>
                  {el.name}
                </MenuItem>
              ))}
            </StyledInputSelect>
            <StyledInputDatePicker
              control={control}
              name="openingDate"
              label="Opening Date"
            />
          </Grid>
          <StyledCheckbox item xs={12}>
            <InputCheckbox control={control} name="card" label="Card" />
          </StyledCheckbox>
        </Grid>
        <Grid container item spacing={1}>
          <Grid item xs={12} sm={6}>
            <ActionButton text="Cancel" action={() => handleModal()} />
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
  account: {}
};

Form.propTypes = {
  account: PropTypes.object,
  handleModal: PropTypes.func.isRequired
};

export default Form;
