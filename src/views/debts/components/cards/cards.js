// base
import React from "react";
import PropTypes from "prop-types";

// external components
import Grid from "@mui/material/Grid";

// custom components
import { Card } from "./components";

const Cards = ({ data, getData, handleForm, setDebt, setIsEdit }) => {
  return (
    <Grid container spacing={1}>
      {data.map((debt, i) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
          <Card
            getData={getData}
            handleForm={handleForm}
            debt={debt}
            setDebt={setDebt}
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
  setDebt: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired
};

export default Cards;
