// base
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";
import { useForm } from "react-hook-form";

// external components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import { Plus } from "@styled-icons/boxicons-regular/Plus";

// custom components
import { InputTextField, FormButton } from "shared/components";

// styled components
import { StyledCard } from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

const FundsListCard = ({ account, goal }) => {
  const settings = useRecoilValue(settingsState);

  const [totalAmount, setTotalAmount] = useState(0);
  const [allocatedAmount, setAllocatedAmount] = useState(0);

  const getAllocatedAmount = () => {
    if (goal.allocated) {
      goal.allocated.forEach((el) => {
        if (el._id === account._id) {
          setAllocatedAmount(el.amount);
          setTotalAmount(account.balance - el.amount);
        }
      });
    }
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors }
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      amount: 0
    }
  });

  const onSubmit = async (payload) => {};

  useEffect(() => {
    getAllocatedAmount();
  }, [allocatedAmount]);

  return (
    <StyledCard>
      <Grid container spacing={1}>
        <Grid container item xs={12} sm={8} spacing={1}>
          <Grid item xs={12}>
            <Typography variant="body1">{account.name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">
              Total: {Math.trunc(totalAmount * 100) / 100}{" "}
              {settings.currencySymbol}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">
              Allocated: {Math.trunc(allocatedAmount * 100) / 100}{" "}
              {settings.currencySymbol}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={1}>
              <Grid item xs={9}>
                <InputTextField
                  error={Boolean(errors.amount?.message)}
                  helperText={errors.amount?.message}
                  control={control}
                  label="Amount *"
                  name="amount"
                  type="text"
                  InputProps={{
                    inputProps: {
                      min: 0,
                      max: totalAmount,
                      inputMode: "numeric",
                      pattern: "[+-]?([0-9]*[.])?[0-9]+"
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        {settings.currencySymbol}
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <FormButton icon={Plus} isIcon />
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

FundsListCard.propTypes = {
  account: PropTypes.object.isRequired,
  goal: PropTypes.object.isRequired
};

export default FundsListCard;
