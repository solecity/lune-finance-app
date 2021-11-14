// base
import React from "react";
import PropTypes from "prop-types";

// external components
import Grid from "@mui/material/Grid";

// custom components
import { Card } from "./components";

const Cards = ({ data, handleModal, setIsEdit, setAccount }) => {
  return (
    <Grid container spacing={1}>
      {data.map((account, i) => (
        <Grid item xs={12} key={i}>
          <Card
            account={account}
            handleModal={handleModal}
            setIsEdit={setIsEdit}
            setAccount={setAccount}
          />
        </Grid>
      ))}
    </Grid>
  );
};

Cards.propTypes = {
  data: PropTypes.array.isRequired,
  handleModal: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired,
  setAccount: PropTypes.func.isRequired
};

export default Cards;
