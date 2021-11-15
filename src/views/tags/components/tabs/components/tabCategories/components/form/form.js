// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";
import { useForm } from "react-hook-form";

// external components
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";

// custom components
import {
  InputTextField,
  InputSelect,
  InputColourPicker,
  FormButton,
  ActionButton,
  ColourButton
} from "shared/components";

// styled components
import { StyledContainer, StyledGrid, StyledPicker } from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

// constants
import { CONSTANTS, TYPES } from "constants/general";

const Form = ({ category, handleModal, getData, isEdit }) => {
  const settings = useRecoilValue(settingsState);

  const [isColourOpen, setIsColourOpen] = useState(false);
  const [colour, setColour] = useState(
    category.colour || CONSTANTS.DEFAULT_COLOUR
  );

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors }
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: category.name || "",
      type: category.type || TYPES.CATEGORY[0].value,
      monthlyBudget: category.monthlyBudget || 0,
      colour: category.colour || CONSTANTS.DEFAULT_COLOUR
    }
  });

  const handleColour = () => setIsColourOpen(!isColourOpen);

  const onSubmit = async (payload) => {
    try {
    } catch (error) {}
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        type: TYPES.CATEGORY[0].value,
        monthlyBudget: 0,
        colour: CONSTANTS.DEFAULT_COLOUR
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <StyledGrid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <InputTextField
                error={Boolean(errors.name?.message)}
                helperText={errors.name?.message}
                control={control}
                label="Name"
                name="name"
                type="text"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputSelect label="Type" name="type" control={control}>
                {TYPES.CATEGORY.map((el, i) => (
                  <MenuItem key={i} value={el.value}>
                    {el.name}
                  </MenuItem>
                ))}
              </InputSelect>
            </Grid>
          </StyledGrid>
          <StyledGrid container spacing={1}>
            <Grid item xs={12} sm={6}>
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
            </Grid>
            <StyledPicker container item xs={6} justifyContent="flex-end">
              <ColourButton colour={colour} action={handleColour} />
              {isColourOpen && (
                <InputColourPicker
                  colour={colour}
                  setColour={setColour}
                  handleColour={handleColour}
                />
              )}
            </StyledPicker>
          </StyledGrid>
          subcategories
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
  category: {}
};

Form.propTypes = {
  category: PropTypes.object,
  handleModal: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired
};

export default Form;
