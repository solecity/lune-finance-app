// base
import React from "react";
import PropTypes from "prop-types";

// external components
import Grid from "@mui/material/Grid";

// custom components
import { Card } from "./components";

const Cards = ({ data, handleForm, setIsEdit, setAccount, getData }) => {
  return (
    <Grid container spacing={1}>
      {data.map((account, i) => (
        <Grid item xs={12} key={i}>
          <Card
            account={account}
            handleForm={handleForm}
            setIsEdit={setIsEdit}
            setAccount={setAccount}
            getData={getData}
          />
        </Grid>
      ))}
    </Grid>
  );
};

Cards.propTypes = {
  data: PropTypes.array.isRequired,
  handleForm: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired,
  setAccount: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired
};

export default Cards;
