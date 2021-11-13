// base
import React from "react";
import PropTypes from "prop-types";

// external components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// custom components
import { ActionButton } from "shared/components";

const Toolbar = ({ handleModal }) => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography component="div" variant="body1" noWrap>
          Sort by
        </Typography>
      </Grid>
      <Grid container item xs={6} justifyContent="flex-end">
        <Grid item xs={2}>
          <ActionButton
            tooltip="New account"
            text={"Add"}
            action={() => handleModal()}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

Toolbar.propTypes = {
  handleModal: PropTypes.func.isRequired
};

export default Toolbar;
