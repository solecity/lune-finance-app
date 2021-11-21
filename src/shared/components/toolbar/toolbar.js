// base
import React from "react";
import PropTypes from "prop-types";

// external components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// custom components
import { ActionButton } from "shared/components";

// styled components
import { StyledContainer } from "./styles";

const Toolbar = ({ handleForm, setIsEdit, setElement }) => {
  const handleOpen = () => {
    setIsEdit(false);
    setElement({});

    handleForm();
  };

  return (
    <StyledContainer container>
      <Grid item xs={6}>
        <Typography component="div" variant="body1" noWrap>
          Sort by
        </Typography>
      </Grid>
      <Grid container item xs={6} justifyContent="flex-end">
        <Grid item xs={2}>
          <ActionButton text={"Add"} action={handleOpen} />
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

Toolbar.propTypes = {
  handleForm: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired,
  setElement: PropTypes.func.isRequired
};

export default Toolbar;
