// base
import React, { useState } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";

// api
import AccountService from "shared/services/account";

// external components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Pencil } from "@styled-icons/boxicons-regular/Pencil";
import { TrashAlt } from "@styled-icons/boxicons-regular/TrashAlt";

// custom components
import { ColourCard, ActionButton, ConfirmDelete } from "shared/components";

// styled components
import {
  StyledContent,
  StyledGrid,
  StyledInfo,
  StyledCardIcon,
  StyledButtons,
  StyledAmount
} from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

// constants
import { TYPES } from "constants/general";

const AccountCard = ({
  getData,
  handleForm,
  account,
  setAccount,
  setIsEdit
}) => {
  const settings = useRecoilValue(settingsState);

  const [openConfirm, setOpenConfirm] = useState(false);

  const getType = (type) => {
    let value = "";

    TYPES.ACCOUNT.forEach((el) => {
      if (el.value === type) value = el.name;
    });

    return value;
  };

  const handleEdit = () => {
    setIsEdit(true);
    setAccount(account);

    handleForm();
  };

  const handleConfirm = () => setOpenConfirm(!openConfirm);

  const handleDelete = async () => {
    const res = await AccountService.deleteOne(account._id);

    if (res) {
      setOpenConfirm(false);
      getData();
    }
  };

  return (
    <Card>
      <StyledContent>
        <StyledGrid container>
          <Grid container item xs={9}>
            <Grid item xs={1}>
              <ColourCard colour={account.colour} />
            </Grid>
            <StyledInfo item xs={11}>
              <Grid container item xs={12}>
                <Grid item>
                  <Typography component="div" variant="body1" noWrap>
                    {account.name}
                  </Typography>
                </Grid>
                <Grid item>
                  <StyledCardIcon bool={account.hasCard} />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography component="div" variant="body2">
                  {getType(account.type)}
                </Typography>
              </Grid>
              {account.openingDate && (
                <Grid item xs={12}>
                  <Typography component="div" variant="body2" noWrap>
                    Opened since {account.openingDate}
                  </Typography>
                </Grid>
              )}
            </StyledInfo>
          </Grid>
          <Grid item xs={3}>
            <StyledAmount item xs={12}>
              <Typography component="div" variant="body1">
                {account.balance} {settings.currencySymbol}
              </Typography>
            </StyledAmount>
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
        item="account"
        name={account.name}
      />
    </Card>
  );
};

AccountCard.propTypes = {
  getData: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired,
  setAccount: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired
};

export default AccountCard;
