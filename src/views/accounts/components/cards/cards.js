// base
import React from "react";
import PropTypes from "prop-types";

// custom components
import { Card } from "./components";

// styled components
import { StyledList, StyledScroll } from "./styles";

const Cards = ({
  data,
  getData,
  handleForm,
  handleConfirm,
  setAccount,
  setIsEdit
}) => {
  return (
    <StyledScroll>
      <StyledList>
        {data.map((account, i) => (
          <Card
            key={i}
            getData={getData}
            handleForm={handleForm}
            handleConfirm={handleConfirm}
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
  handleConfirm: PropTypes.func.isRequired,
  setAccount: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired
};

export default Cards;
