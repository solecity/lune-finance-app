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
  InputColourSlider,
  FormButton
} from "shared/components";

// atom
import { settingsState } from "shared/recoil/atoms";

// constants
import { TYPES } from "constants/general";

const Form = ({ category }) => {
  const settings = useRecoilValue(settingsState);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: category.name || "",
      type: category.type || 0,
      monthlyBudget: category.monthlyBudget || 0,
      colour: category.colour || ""
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
          <InputSelect label="Type" name="type" control={control}>
            {TYPES.CATEGORY.map((el, i) => (
              <MenuItem key={i} value={el.value}>
                {el.name}
              </MenuItem>
            ))}
          </InputSelect>
          <InputTextField
            error={Boolean(errors.monthlyBudget?.message)}
            helperText={errors.monthlyBudget?.message}
            control={control}
            label="Monthly Budget"
            name="monthlyBudget"
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
          <InputColourSlider />
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
  category: {}
};

Form.propTypes = {
  category: PropTypes.object
};

export default Form;
