// base
import React from "react";
import PropTypes from "prop-types";

// external components
import Grid from "@mui/material/Grid";

// custom components
import { Card } from "./components";

const Cards = ({ data, getData, handleForm, setAccount, setIsEdit }) => {
  return (
    <Grid container spacing={1}>
      {data.map((account, i) => (
        <Grid item xs={12} key={i}>
          <Card
            getData={getData}
            handleForm={handleForm}
            account={account}
            setAccount={setAccount}
            setIsEdit={setIsEdit}
          />
        </Grid>
      ))}
    </Grid>
  );
};

Cards.propTypes = {
  data: PropTypes.array.isRequired,
  getData: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
  setAccount: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired
};

export default Cards;
