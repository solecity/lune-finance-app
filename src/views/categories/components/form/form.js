// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// api
import CategoryService from "shared/services/category";

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
import { StyledContainer, StyledGrid } from "./styles";

// schemas
import { schemaCategory } from "constants/schemas";

// atom
import { settingsState } from "shared/recoil/atoms";

// constants
import { CONSTANTS, TYPES } from "constants/general";

const Form = ({ formType, category, handleForm, getData, isEdit }) => {
  const settings = useRecoilValue(settingsState);

  const [isColourOpen, setIsColourOpen] = useState(false);
  const [colour, setColour] = useState(
    category.colour || CONSTANTS.DEFAULT_COLOUR
  );

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitSuccessful, errors }
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: category.name || "",
      type: category.type || formType,
      monthlyBudget: category.monthlyBudget || 0,
      colour: category.colour || CONSTANTS.DEFAULT_COLOUR
    },
    resolver: yupResolver(schemaCategory)
  });

  const type = watch("type");

  const isOutcome = type === CONSTANTS.EXPENSE;

  const handleColour = () => setIsColourOpen(!isColourOpen);

  const onSubmit = async (payload) => {
    payload.colour = colour;

    const res = isEdit
      ? await CategoryService.patch(category._id, payload)
      : await CategoryService.post(payload);

    if (res) {
      handleForm();
      getData();
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        type: formType,
        monthlyBudget: 0,
        colour: CONSTANTS.DEFAULT_COLOUR
      });
    }
  }, [isSubmitSuccessful, reset, formType]);

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid container spacing={1}>
            <StyledGrid item xs={12} sm={isOutcome ? 6 : 12}>
              <InputTextField
                error={Boolean(errors.name?.message)}
                helperText={errors.name?.message}
                control={control}
                label="Name"
                name="name"
                type="text"
              />
            </StyledGrid>
            <StyledGrid item xs={12} sm={isOutcome ? 6 : 12}>
              <InputSelect label="Type" name="type" control={control}>
                {TYPES.CATEGORY.map((el, i) => (
                  <MenuItem key={i} value={el.value}>
                    {el.name}
                  </MenuItem>
                ))}
              </InputSelect>
            </StyledGrid>
          </Grid>
          <Grid container spacing={1}>
            {type === CONSTANTS.EXPENSE && (
              <StyledGrid item xs={12} sm={isOutcome ? 6 : 12}>
                <InputTextField
                  error={Boolean(errors.monthlyBudget?.message)}
                  helperText={errors.monthlyBudget?.message}
                  control={control}
                  label="Monthly Budget"
                  name="monthlyBudget"
                  type="number"
                  InputProps={{
                    inputProps: {
                      min: 0
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        {settings.currencySymbol}
                      </InputAdornment>
                    )
                  }}
                />
              </StyledGrid>
            )}
            <StyledGrid item xs={12} sm={isOutcome ? 6 : 12} className="picker">
              <ColourButton colour={colour} action={handleColour} />
              <InputColourPicker
                isOpen={isColourOpen}
                handleColour={handleColour}
                colour={colour}
                setColour={setColour}
              />
            </StyledGrid>
          </Grid>
        </Grid>
        <Grid container item spacing={1}>
          <Grid item xs={12} sm={6}>
            <ActionButton text="Cancel" action={() => handleForm()} />
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
  formType: PropTypes.string,
  category: PropTypes.object,
  handleForm: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired
};

export default Form;
