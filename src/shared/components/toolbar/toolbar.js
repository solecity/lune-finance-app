// base
import React, { useState } from "react";
import PropTypes from "prop-types";

// libraries
import { useForm } from "react-hook-form";

// external components
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// custom components
import { InputSelect, ActionButton } from "shared/components";

// styled components
import { StyledContainer, StyledGrid } from "./styles";

const Toolbar = ({ handleForm, setIsEdit, setElement }) => {
  const [sortBy, setSortBy] = useState("name");

  const handleOpen = () => {
    setIsEdit(false);
    setElement({});

    handleForm();
  };

  return (
    <StyledContainer container>
      <StyledGrid container>
        <Grid item xs={1}>
          <ActionButton text={"Add"} action={handleOpen} />
        </Grid>
      </StyledGrid>
    </StyledContainer>
  );
};

Toolbar.propTypes = {
  handleForm: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired,
  setElement: PropTypes.func.isRequired
};

export default Toolbar;
