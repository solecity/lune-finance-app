// base
import React, { useState } from "react";
import PropTypes from "prop-types";

// libraries
import { useForm } from "react-hook-form";

// custom components
import { InputSelect, ActionButton } from "shared/components";

// styled components
import { StyledToolbar, StyledGrid } from "./styles";

// icons
import { Plus } from "shared/icons";

const Toolbar = ({ handleForm, setIsEdit, setElement }) => {
  const [sortBy, setSortBy] = useState("name");

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors }
  } = useForm({
    mode: "onBlur",
    defaultValues: {}
  });

  const handleOpen = () => {
    setIsEdit(false);
    setElement({});

    handleForm();
  };

  return (
    <StyledToolbar>
      <ActionButton icon={<Plus />} action={handleOpen} />
      <InputSelect label="Sort" name="sort" control={control} />
    </StyledToolbar>
  );
};

Toolbar.propTypes = {
  handleForm: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired,
  setElement: PropTypes.func.isRequired
};

export default Toolbar;
