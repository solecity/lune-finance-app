// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";

// external components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { RadioCircle } from "@styled-icons/boxicons-regular/RadioCircle";

// styled components
import { StyledCardAction, StyledInfo, StyledCardIcon } from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

// constants
import { TYPES } from "constants/general";

const AccountCard = ({ account }) => {
  const settings = useRecoilValue(settingsState);

  const getType = (type) => {
    let value = "";

    TYPES.ACCOUNT.forEach((el) => {
      if (el.value === type) value = el.name;
    });

    return value;
  };

  return (
    <Card>
      <StyledCardAction>
        <CardContent>
          <Grid container>
            <Grid container item xs={10}>
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
            <Grid item xs={2}>
              <Grid container item xs={12} justifyContent="flex-end">
                <Typography component="div" variant="body1">
                  {account.balance} {settings.currencySymbol}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCardAction>
    </Card>
  );
};

AccountCard.propTypes = {
  account: PropTypes.object.isRequired
};

export default AccountCard;
