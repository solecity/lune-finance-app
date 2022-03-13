// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";

// custom components
import { ActionButton } from "shared/components";

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
import { CreditCard, Trash, Edit } from "shared/icons";

const AccountCard = ({
  getData,
  handleForm,
  handleConfirm,
  account,
  setAccount,
  setIsEdit
}) => {
  const settings = useRecoilValue(settingsState);

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

  return (
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
          icon={<Trash />}
          action={handleConfirm}
        />
        <ActionButton isAction={false} icon={<Edit />} action={handleEdit} />
      </StyledButtons>
    </StyledCard>
  );
};

AccountCard.propTypes = {
  getData: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired,
  setAccount: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired
};

export default AccountCard;
