// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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
  InputDatePicker,
  InputColourPicker,
  InputCheckbox,
  FormButton,
  ActionButton,
  ColourButton
} from "shared/components";

// styled components
import {
  StyledContainer,
  StyledFirstGrid,
  StyledLastGrid,
  StyledCheckbox,
  StyledPicker
} from "./styles";

// schemas
import { schemaAccount } from "constants/schemas";

// atom
import { settingsState } from "shared/recoil/atoms";

// constants
import { CONSTANTS, TYPES } from "constants/general";

const Form = ({ account, handleForm, getData, isEdit }) => {
  const settings = useRecoilValue(settingsState);

  const [isColourOpen, setIsColourOpen] = useState(false);
  const [colour, setColour] = useState(
    account.colour || CONSTANTS.DEFAULT_COLOUR
  );

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
      hasCard: account.hasCard || false
    },
    resolver: yupResolver(schemaAccount)
  });

  const handleColour = () => setIsColourOpen(!isColourOpen);

  const onSubmit = async (payload) => {
    payload.colour = colour;

    const res = isEdit
      ? await AccountService.put(account._id, payload)
      : await AccountService.post(payload);

    if (res) {
      handleForm();
      getData();
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        type: CONSTANTS.INITIAL_ACCOUNT_TYPE,
        balance: 0,
        openingDate: new Date(),
        hasCard: false
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <StyledContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <StyledFirstGrid container spacing={1}>
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
                  {TYPES.ACCOUNT.map((el, i) => (
                    <MenuItem key={i} value={el.value}>
                      {el.name}
                    </MenuItem>
                  ))}
                </InputSelect>
              </Grid>
            </StyledFirstGrid>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <InputTextField
                  error={Boolean(errors.balance?.message)}
                  helperText={errors.balance?.message}
                  control={control}
                  label="Balance"
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
                <InputDatePicker
                  control={control}
                  name="openingDate"
                  label="Opening Date"
                />
              </Grid>
            </Grid>
            <StyledLastGrid container spacing={1}>
              <StyledCheckbox item xs={6}>
                <InputCheckbox control={control} name="hasCard" label="Card" />
              </StyledCheckbox>
              <StyledPicker item xs={6}>
                <ColourButton colour={colour} action={handleColour} />
                <InputColourPicker
                  isOpen={isColourOpen}
                  handleColour={handleColour}
                  colour={colour}
                  setColour={setColour}
                />
              </StyledPicker>
            </StyledLastGrid>
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
    </>
  );
};

Form.defaultProps = {
  account: {}
};

Form.propTypes = {
  account: PropTypes.object,
  handleForm: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired
};

export default Form;
