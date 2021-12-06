// base
import React from "react";
import PropTypes from "prop-types";

// external components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// styled components
import { StyledLabel, StyledInput } from "./styles";

const InputInfo = ({ label, name }) => {
  return (
    <div>
      <StyledLabel variant="subtitle2">{label}</StyledLabel>
      <StyledInput container>
        <Grid item>
          <Typography variant="body2">{name}</Typography>
        </Grid>
      </StyledInput>
    </div>
  );
};

InputInfo.defaultProps = {
  name: ""
};

InputInfo.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string
};

export default InputInfo;
