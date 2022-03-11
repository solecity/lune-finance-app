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
  StyledCard,
  StyledColour,
  StyledContent,
  StyledHeader,
  StyledTitle,
  StyledName,
  StyledCardIcon,
  StyledAmount,
  StyledValue,
  StyledDetails,
  StyledText,
  StyledButtons
} from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

// constants
import { TYPES } from "constants/general";

// styles
import themes from "styles/theme";

// icons
import { CreditCard } from "shared/icons";

const AccountCard = ({
  getData,
  handleForm,
  account,
  setAccount,
  setIsEdit
}) => {
  const settings = useRecoilValue(settingsState);

  const [openConfirm, setOpenConfirm] = useState(false);

  const cardColour = {
    active: themes[settings.theme].colours.successMain,
    disabled: themes[settings.theme].colours.actionHover
  };

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
    <>
      <StyledCard>
        <StyledColour colour={account.colour} />
        <StyledContent>
          <StyledHeader>
            <StyledTitle>
              <StyledName>{account.name}</StyledName>
              <StyledCardIcon>
                <CreditCard
                  colour={
                    account.hasCard ? cardColour.active : cardColour.disabled
                  }
                />
              </StyledCardIcon>
            </StyledTitle>
            <StyledAmount>
              <StyledValue>
                {account.balance} {settings.currencySymbol}
              </StyledValue>
            </StyledAmount>
          </StyledHeader>
          <StyledDetails>
            <StyledText component="div" variant="body2">
              {getType(account.type)}
            </StyledText>
            <StyledText>
              {account.openingDate ? `Opened since ${account.openingDate}` : ""}
            </StyledText>
          </StyledDetails>
        </StyledContent>
        <StyledButtons>
          <ActionButton
            isAction={false}
            icon={<TrashAlt />}
            action={handleConfirm}
          />
          <ActionButton
            isAction={false}
            icon={<Pencil />}
            action={handleEdit}
          />
        </StyledButtons>
      </StyledCard>
      <ConfirmDelete
        open={openConfirm}
        handleClose={handleConfirm}
        handleDelete={handleDelete}
        item="account"
        name={account.name}
      />
    </>
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
