// base
import React from "react";

// external components
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";

// custom components
import { ActionButton } from "shared/components";

// styled components
import { StyledGrid } from "./styles";

// constants
import { DATE_FORMAT } from "constants/general";

const Toolbar = ({ setYear }) => {
  return (
    <StyledGrid container spacing={1}>
      <Grid item xs={3}>
        <DatePicker
          label="From"
          inputFormat={DATE_FORMAT}
          renderInput={(params) => <TextField {...params} />}
          onChange={(newValue) => {}}
        />
      </Grid>
      <Grid item xs={3}>
        <DatePicker
          label="To"
          inputFormat={DATE_FORMAT}
          renderInput={(params) => <TextField {...params} />}
          onChange={(newValue) => {}}
        />
      </Grid>
    </StyledGrid>
  );
};

Toolbar.propTypes = {};

export default Toolbar;
