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

const Form = ({ debt }) => {
  const settings = useRecoilValue(settingsState);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: debt.name || "",
      amount: debt.amount || 0,
      recipient: debt.recipient || "",
      deadline: debt.deadline || new Date(),
      status: debt.status || ""
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
          <InputTextField
            error={Boolean(errors.name?.message)}
            helperText={errors.name?.message}
            control={control}
            label="Name"
            name="name"
            type="text"
          />
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
          <InputSelect label="Recipient" name="recipient" control={control}>
            <MenuItem value="none">---</MenuItem>
          </InputSelect>
          <InputDatePicker control={control} name="deadline" label="Deadline" />
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
  debt: {}
};

Form.propTypes = {
  debt: PropTypes.object
};

export default Form;
