// base
import React from "react";
import PropTypes from "prop-types";

// external components
import Grid from "@mui/material/Grid";

// custom components
import { Card } from "./components";

// styled components
import { StyledList, StyledScroll } from "./styles";

const Cards = ({ data, getData, handleForm, setAccount, setIsEdit }) => {
  return (
    <StyledScroll>
      <StyledList>
        {data.map((account, i) => (
          <Card
            key={i}
            getData={getData}
            handleForm={handleForm}
            account={account}
            setAccount={setAccount}
            setIsEdit={setIsEdit}
          />
        ))}
      </StyledList>
    </StyledScroll>
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
