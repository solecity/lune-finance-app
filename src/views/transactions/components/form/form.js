// base
import React from "react";
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

const Form = () => {
  const settings = useRecoilValue(settingsState);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = async (payload) => {
    try {
    } catch (error) {}
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
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
              name="subCategory"
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
              <FormButton text="Cancel" />
            </Grid>
            <Grid item xs={6}>
              <FormButton text="Save" />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

Form.propTypes = {};

export default Form;
