// base
import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";

// api
import GoalService from "shared/services/goal";

// external components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Pencil } from "@styled-icons/boxicons-regular/Pencil";
import { TrashAlt } from "@styled-icons/boxicons-regular/TrashAlt";

// custom components
import { ActionButton, ConfirmDelete } from "shared/components";

// styled components
import {
  StyledCard,
  StyledContent,
  StyledGrid,
  StyledCardMedia,
  StyledName,
  StyledLinearProgress,
  StyledButtons
} from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

const GoalCard = ({ getData, handleForm, goal, setGoal, setIsEdit }) => {
  const settings = useRecoilValue(settingsState);

  const [percentage, setPercentage] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [openConfirm, setOpenConfirm] = useState(false);

  const image = goal.image || "/static/images/no-image.png";
  const remainingAmount = goal.amount - totalAmount;

  const getTotalAmount = useCallback(() => {
    setTotalAmount(Math.floor(Math.random() * goal.amount));
  }, [goal]);

  const getPercentage = useCallback(() => {
    const value = (totalAmount * 100) / goal.amount;

    setPercentage(value);
  }, [goal, totalAmount]);

  const openForm = () => {
    setIsEdit(true);
    setGoal(goal);

    handleForm();
  };

  const handleConfirm = async () => setOpenConfirm(!openConfirm);

  const handleDelete = async (goal) => {
    const res = await GoalService.deleteOne(goal._id);

    if (res) {
      setOpenConfirm(false);
      getData();
    }
  };

  useEffect(() => {
    getTotalAmount();
  }, [getTotalAmount]);

  useEffect(() => {
    getPercentage();
  }, [getPercentage]);

  return (
    <StyledCard>
      <StyledCardMedia component="img" image={image} alt={goal.name} />
      <StyledContent>
        <StyledGrid>
          <StyledName component="div" variant="body1" noWrap>
            {goal.name}
          </StyledName>
          <StyledLinearProgress variant="determinate" value={percentage} />
          <Grid container>
            <Grid item xs={6}>
              <Typography component="div" variant="subtitle2">
                {totalAmount} {settings.currencySymbol}
              </Typography>
            </Grid>
            <Grid container item xs={6} justifyContent="flex-end">
              <Typography component="div" variant="subtitle2">
                {remainingAmount} {settings.currencySymbol}
              </Typography>
            </Grid>
          </Grid>
        </StyledGrid>
        <StyledButtons container spacing={0.125}>
          <Grid item xs={6}>
            <ActionButton
              isAction={false}
              icon={<TrashAlt />}
              action={handleConfirm}
            />
          </Grid>
          <Grid item xs={6}>
            <ActionButton
              isAction={false}
              icon={<Pencil />}
              action={openForm}
            />
          </Grid>
        </StyledButtons>
      </StyledContent>
      <ConfirmDelete
        open={openConfirm}
        handleClose={handleConfirm}
        handleDelete={() => handleDelete(goal._id)}
        item="goal"
        name={goal.name}
      />
    </StyledCard>
  );
};

GoalCard.propTypes = {
  getData: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
  goal: PropTypes.object.isRequired,
  setGoal: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired
};

export default GoalCard;