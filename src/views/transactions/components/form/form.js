// base
import React, { useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";
import { useForm } from "react-hook-form";

// external components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";

// custom components
import {
  InputTextField,
  InputSelect,
  InputDatePicker,
  FormButton
} from "shared/components";

// atom
import { settingsState } from "shared/recoil/atoms";

// constants
import { TYPES } from "constants/general";

const Form = ({ transaction, getData, isEdit }) => {
  const settings = useRecoilValue(settingsState);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors }
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      description: transaction.description || "",
      category: transaction.category || "",
      subcategory: transaction.subcategory || "",
      quantity: transaction.quantity || 0,
      amount: transaction.amount || 0,
      date: transaction.date || new Date(),
      recipient: transaction.recipient || "",
      account: transaction.account || ""
    }
  });

  const onSubmit = async (payload) => {
    try {
    } catch (error) {}
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        description: "",
        category: "",
        subcategory: "",
        quantity: 0,
        amount: 0,
        date: new Date(),
        recipient: "",
        account: ""
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12}>
            <InputSelect label="Type" name="type" control={control}>
              {TYPES.TRANSACTION.map((el, i) => (
                <MenuItem key={i} value={i + 1}>
                  {el.name}
                </MenuItem>
              ))}
            </InputSelect>
          </Grid>
          <Grid item xs={6}>
            <InputSelect label="Category" name="category" control={control}>
              <MenuItem value={0}>---</MenuItem>
            </InputSelect>
            <InputDatePicker control={control} name="date" label="Date" />
          </Grid>
          <Grid item xs={6}>
            <InputSelect
              label="SubCategory"
              name="subcategory"
              control={control}
            >
              <MenuItem value={0}>---</MenuItem>
            </InputSelect>
            <Grid container item spacing={1}>
              <Grid item xs={6}>
                <InputTextField
                  error={Boolean(errors.quantity?.message)}
                  helperText={errors.quantity?.message}
                  control={control}
                  label="Quantity"
                  name="quantity"
                  type="number"
                  InputProps={{
                    inputProps: { min: 0 }
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <InputTextField
                  error={Boolean(errors.amount?.message)}
                  helperText={errors.amount?.message}
                  control={control}
                  label="Amount"
                  name="amount"
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
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <InputTextField
              error={Boolean(errors.description?.message)}
              helperText={errors.description?.message}
              control={control}
              label="Description"
              name="description"
              type="text"
            />
          </Grid>
          <Grid item xs={6}>
            <InputSelect label="Recipient" name="recipient" control={control}>
              <MenuItem value={0}>---</MenuItem>
            </InputSelect>
          </Grid>
          <Grid item xs={6}>
            <InputSelect label="Account" name="account" control={control}>
              <MenuItem value={0}>---</MenuItem>
            </InputSelect>
          </Grid>
          <Grid container item spacing={1}>
            <Grid item xs={6}>
              <FormButton text="Save" />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

Form.defaultProps = {
  transaction: {}
};

Form.propTypes = {
  transaction: PropTypes.object,
  getData: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired
};

export default Form;
