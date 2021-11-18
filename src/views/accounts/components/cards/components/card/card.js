// base
import React, { useState } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";

// api
import AccountService from "shared/services/account";

// external components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { RadioCircle } from "@styled-icons/boxicons-regular/RadioCircle";
import { Pencil } from "@styled-icons/boxicons-regular/Pencil";
import { TrashAlt } from "@styled-icons/boxicons-regular/TrashAlt";

// custom components
import { ActionButton, ConfirmDelete } from "shared/components";

// styled components
import {
  StyledCard,
  StyledContent,
  StyledGrid,
  StyledInfo,
  StyledCardIcon,
  StyledCardButton
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

  const openForm = () => {
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
    <StyledCard>
      <StyledContent>
        <Grid container>
          <StyledGrid container direction="row" item xs={12}>
            <Grid container item xs={9}>
              <Grid container item xs={1}>
                <Avatar sx={{ bgcolor: account.colour, width: 25, height: 25 }}>
                  <RadioCircle />
                </Avatar>
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
              <Grid
                container
                item
                xs={12}
                justifyContent="flex-end"
                alignItems="center"
              >
                <Typography component="div" variant="body1">
                  {account.balance} {settings.currencySymbol}
                </Typography>
              </Grid>
            </Grid>
          </StyledGrid>
          <Grid container spacing={0.125} alignItems="center">
            <StyledCardButton item xs={6} className="left">
              <ActionButton
                isAction={false}
                icon={<TrashAlt />}
                action={handleConfirm}
              />
            </StyledCardButton>
            <StyledCardButton item xs={6}>
              <ActionButton
                isAction={false}
                icon={<Pencil />}
                action={openForm}
              />
            </StyledCardButton>
          </Grid>
        </Grid>
      </StyledContent>
      <ConfirmDelete
        open={openConfirm}
        handleClose={handleConfirm}
        handleDelete={handleDelete}
        item="account"
        name={account.name}
      />
    </StyledCard>
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
