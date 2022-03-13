// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";

// api
import GoalService from "shared/services/goal";

// external components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

// custom components
import { ActionButton, ProgressBar } from "shared/components";

// styled components
import {
  StyledCard,
  StyledContent,
  StyledName,
  StyledLinearProgress,
  StyledButtons
} from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

// icons
import { Trash, Edit } from "shared/icons";

const GoalCard = ({
  getData,
  handleForm,
  handleConfirm,
  goal,
  setGoal,
  setIsEdit
}) => {
  const settings = useRecoilValue(settingsState);

  const [allocatedAmount, setAllocatedAmount] = useState(0);
  const [remainingAmount, setRemainingAmount] = useState(0);
  const [percentage, setPercentage] = useState(10);

  const getPercentage = () => {
    const value = (allocatedAmount * 100) / goal.amount;

    if (value >= 100) setPercentage(100);
    else setPercentage(value);
  };

  const getRemainingAmount = () => {
    let total = 0;

    goal.allocated.forEach((el) => {
      total += el.amount;
    });

    console.log({ total });

    setAllocatedAmount(total);
    setRemainingAmount(goal.amount - total);
  };

  const handleEdit = () => {
    setIsEdit(true);
    setGoal(goal);

    handleForm();
  };

  useEffect(() => {
    getRemainingAmount();
    getPercentage();
  }, [allocatedAmount]);

  return (
    <StyledCard>
      <StyledContent>
        <StyledName>{goal.name}</StyledName>
        {console.log({ percentage, allocatedAmount, remainingAmount })}
        <ProgressBar
          percentage={percentage}
          allocated={allocatedAmount}
          remaining={remainingAmount}
          currency={settings.currencySymbol}
        />
      </StyledContent>
      <StyledButtons>
        <ActionButton
          isAction={false}
          icon={<Trash />}
          action={handleConfirm}
        />
        <ActionButton isAction={false} icon={<Edit />} action={handleEdit} />
      </StyledButtons>
    </StyledCard>
  );
};

GoalCard.propTypes = {
  getData: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  goal: PropTypes.object.isRequired,
  setGoal: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired
};

export default GoalCard;
