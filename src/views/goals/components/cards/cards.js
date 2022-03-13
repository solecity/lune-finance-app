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
  setGoal,
  setIsEdit
}) => {
  return (
    <StyledScroll>
      <StyledList>
        {data.map((goal, i) => (
          <Card
            key={i}
            getData={getData}
            handleForm={handleForm}
            handleConfirm={handleConfirm}
            goal={goal}
            setGoal={setGoal}
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
  setGoal: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired
};

export default Cards;
