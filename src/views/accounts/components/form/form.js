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
  InputCheckbox,
  FormButton
} from "shared/components";

// atom
import { settingsState } from "shared/recoil/atoms";

// constants
import { TYPES } from "constants/general";

const Form = ({ account }) => {
  const settings = useRecoilValue(settingsState);

  const {
    control,
    handleSubmit,
    formState: { errors }
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
    } catch (error) {}
  };

  return (
    <Container>
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
          <Grid item xs={12}>
            <InputCheckbox control={control} name="card" label="Has Card" />
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

Form.defaultProps = {
  account: {}
};

Form.propTypes = {
  account: PropTypes.object
};

export default Form;
