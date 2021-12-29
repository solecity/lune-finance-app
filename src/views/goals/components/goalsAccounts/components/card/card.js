// base
import React, { useState } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";

// external components
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// styled components
import {
  StyledCard,
  StyledTitle,
  StyledTypography,
  StyledGrid
} from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

const AccountCard = ({ getData, handleForm, account }) => {
  const settings = useRecoilValue(settingsState);

  const [isLoading, setIsLoading] = useState(true);
  const [funds, setFunds] = useState({});

  return (
    <StyledCard>
      <Grid container spacing={1}>
        <StyledTitle item xs={12}>
          <Typography component="div" variant="body1" className="label">
            {account.name}
          </Typography>
        </StyledTitle>
        <StyledGrid item xs={6}>
          <StyledTypography component="div" variant="h6" className="yellow">
            {Math.trunc(account.balance * 100) / 100} {settings.currencySymbol}
          </StyledTypography>
          <StyledTypography component="div" variant="body2" className="label">
            Total
          </StyledTypography>
        </StyledGrid>
        <Grid item xs={6}>
          <StyledTypography component="div" variant="h6" className="blue">
            0 {settings.currencySymbol}
          </StyledTypography>
          <StyledTypography component="div" variant="body2" className="label">
            Allocated
          </StyledTypography>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

AccountCard.propTypes = {
  getData: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired
};

export default AccountCard;
