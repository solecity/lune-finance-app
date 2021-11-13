// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { useForm } from "react-hook-form";

// external components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// custom components
import {
  InputTextField,
  InputColourSlider,
  FormButton
} from "shared/components";

const Form = ({ recipient }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: recipient.name || "",
      colour: recipient.colour || ""
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
  recipient: {}
};

Form.propTypes = {
  recipient: PropTypes.object
};

export default Form;
