// base
import React, { useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// api
import CategoryService from "shared/services/category";

// external components
import Grid from "@mui/material/Grid";

// custom components
import { InputTextField, FormButton, ActionButton } from "shared/components";

// styled components
import { StyledContainer, StyledGrid } from "./styles";

// schemas
import { schemaSubCategory } from "constants/schemas";

const SubCategoryForm = ({ subcategory, handleForm, getData, isEdit }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors }
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: subcategory.name || "",
      category: subcategory.category.name || ""
    },
    resolver: yupResolver(schemaSubCategory)
  });

  const onSubmit = async (payload) => {
    const res = isEdit
      ? await CategoryService.patchSubCategory(
          subcategory.category._id,
          subcategory._id,
          payload
        )
      : await CategoryService.patchSubCategories(
          subcategory.category._id,
          payload
        );

    if (res) {
      handleForm();
      getData();
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        category: ""
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <StyledGrid item xs={12}>
            <InputTextField
              control={control}
              label="Category"
              name="category"
              type="text"
              disabled
            />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <InputTextField
              error={Boolean(errors.name?.message)}
              helperText={errors.name?.message}
              control={control}
              label="Name"
              name="name"
              type="text"
            />
          </StyledGrid>
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

SubCategoryForm.defaultProps = {
  subcategory: {}
};

SubCategoryForm.propTypes = {
  subcategory: PropTypes.object,
  handleForm: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired
};

export default SubCategoryForm;
