// base
import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";

// api
import DebtService from "shared/services/debt";

// external components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Pencil } from "@styled-icons/boxicons-regular/Pencil";
import { TrashAlt } from "@styled-icons/boxicons-regular/TrashAlt";

// custom components
import { ActionButton, ConfirmDelete } from "shared/components";

// styled components
import {
  StyledContent,
  StyledGrid,
  StyledName,
  StyledLinearProgress,
  StyledButtons
} from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

const DebtCard = ({ getData, handleForm, debt, setDebt, setIsEdit }) => {
  const settings = useRecoilValue(settingsState);

  const [percentage, setPercentage] = useState(0);
  const [openConfirm, setOpenConfirm] = useState(false);

  const remainingAmount = debt.amount - debt.payed;
  const payed = debt.amount === debt.payed ? "payed" : "";

  const getPercentage = useCallback(() => {
    const value = (debt.payed * 100) / debt.amount;

    setPercentage(value);
  }, [debt]);

  const handleEdit = () => {
    setIsEdit(true);
    setDebt(debt);

    handleForm();
  };

  const handleConfirm = async () => setOpenConfirm(!openConfirm);

  const handleDelete = async () => {
    const res = await DebtService.deleteOne(debt._id);

    if (res) {
      setOpenConfirm(false);
      getData();
    }
  };

  useEffect(() => {
    getPercentage();
  }, [getPercentage]);

  return (
    <Card>
      <StyledContent>
        <StyledGrid>
          <StyledName component="div" variant="body1" noWrap>
            {debt.name}
          </StyledName>
          <StyledLinearProgress
            variant="determinate"
            value={percentage}
            className={payed}
          />
          <Grid container>
            <Grid item xs={6}>
              <Typography component="div" variant="subtitle2">
                {debt.payed} {settings.currencySymbol}
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
              action={handleEdit}
            />
          </Grid>
        </StyledButtons>
      </StyledContent>
      <ConfirmDelete
        open={openConfirm}
        handleClose={handleConfirm}
        handleDelete={handleDelete}
        item="debt"
        name={debt.name}
      />
    </Card>
  );
};

DebtCard.propTypes = {
  getData: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
  debt: PropTypes.object.isRequired,
  setDebt: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired
};

export default DebtCard;
