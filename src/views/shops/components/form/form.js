// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useForm } from "react-hook-form";

// api
import ShopService from "shared/services/shop";

// external components
import Grid from "@mui/material/Grid";

// custom components
import {
  InputTextField,
  InputColourPicker,
  FormButton,
  ActionButton,
  ColourButton
} from "shared/components";

// styled components
import {
  StyledContainer,
  StyledGrid,
  StyledLastGrid,
  StyledPicker
} from "./styles";

// constants
import { DEFAULT } from "constants/general";

const Form = ({ shop, handleForm, getData, isEdit }) => {
  const [isColourOpen, setIsColourOpen] = useState(false);
  const [colour, setColour] = useState(shop.colour || DEFAULT.COLOUR);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors }
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: shop.name || "",
      colour: shop.colour || DEFAULT.COLOUR
    }
  });

  const handleColour = () => setIsColourOpen(!isColourOpen);

  const onSubmit = async (payload) => {
    payload.colour = colour;

    const res = isEdit
      ? await ShopService.put(shop._id, payload)
      : await ShopService.post(payload);

    if (res) {
      handleForm();
      getData();
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        colour: DEFAULT.COLOUR
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <StyledGrid item xs={12}>
            <InputTextField
              error={Boolean(errors.name?.message)}
              helperText={errors.name?.message}
              control={control}
              label="Name *"
              name="name"
              type="text"
            />
          </StyledGrid>
          <StyledLastGrid container item>
            <StyledPicker item xs={12}>
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
  );
};

Form.defaultProps = {
  shop: {}
};

Form.propTypes = {
  shop: PropTypes.object,
  handleForm: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired
};

export default Form;
