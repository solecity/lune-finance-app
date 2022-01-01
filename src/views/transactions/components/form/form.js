// base
import React, { useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// api
import TransactionService from "shared/services/transaction";

// external components
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";

// custom components
import {
  InputTextField,
  InputSelect,
  InputDatePicker,
  FormButton,
  ActionButton
} from "shared/components";

// styled components
import { StyledContainer, StyledGrid } from "./styles";

// schemas
import { schemaTransaction } from "constants/schemas";

// atom
import { settingsState } from "shared/recoil/atoms";

// constants
import { CONSTANTS, TYPES } from "constants/general";

const Form = ({
  formType,
  transaction,
  categories,
  recipients,
  accounts,
  debts,
  shops,
  getData,
  handleForm,
  isEdit
}) => {
  const settings = useRecoilValue(settingsState);

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitSuccessful, errors }
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      description: transaction.description || "",
      type: transaction.type || formType,
      category: transaction.category || "",
      subcategory: transaction.subcategory || "",
      quantity: transaction.quantity || 1,
      amount: transaction.amount || 10,
      date: transaction.date || new Date(),
      recipient: transaction.recipient || 0,
      account: transaction.account || 0,
      from: transaction.from || 0,
      to: transaction.to || 0,
      debt: transaction.debt || 0,
      shop: transaction.shop || 0
    },
    resolver: yupResolver(schemaTransaction)
  });

  const selectedType = watch("type");
  const categoryIndex = watch("category");

  const type =
    selectedType === CONSTANTS.EXPENSE || selectedType === CONSTANTS.INCOME;

  const loadTypes = () => {
    return TYPES.TRANSACTION.map((el, i) => (
      <MenuItem key={i} value={el.value}>
        {el.name}
      </MenuItem>
    ));
  };

  const loadCategories = () => {
    return categories
      .filter((el) => el.type === selectedType)
      .map((el, i) => (
        <MenuItem key={i} value={el._id}>
          {el.name}
        </MenuItem>
      ));
  };

  const loadSubCategories = () => {
    return categories
      .filter((el) => el._id === categoryIndex)
      .map((el) =>
        el.subcategories.map((el, i) => (
          <MenuItem key={i} value={el._id}>
            {el.name}
          </MenuItem>
        ))
      );
  };

  const loadRecipients = () => {
    return recipients.map((el, i) => (
      <MenuItem key={i} value={el._id}>
        {el.name}
      </MenuItem>
    ));
  };

  const loadAccounts = () => {
    return accounts.map((el, i) => (
      <MenuItem key={i} value={el._id}>
        {el.name} ({el.type})
      </MenuItem>
    ));
  };

  const loadDebts = () => {
    return debts.map((el, i) => (
      <MenuItem key={i} value={el._id}>
        {el.name}
      </MenuItem>
    ));
  };

  const loadShops = () => {
    return shops.map((el, i) => (
      <MenuItem key={i} value={el._id}>
        {el.name}
      </MenuItem>
    ));
  };

  const onSubmit = async (payload) => {
    let res = {};
    const { recipient, account, from, to, debt, ...data } = payload;

    if (recipient != 0) {
      data.recipient = recipient;
    }

    if (account != 0) {
      data.account = account;
    }

    if (from != 0) {
      data.from = from;
    }

    if (to != 0) {
      data.to = to;
    }

    if (debt != 0) {
      data.debt = debt;
    }

    if (isEdit) {
      if (type) {
        res = await TransactionService.putInOutcome(transaction._id, data);
      } else {
        res = await TransactionService.putTransfer(transaction._id, data);
      }
    } else if (type) {
      res = await TransactionService.postInOutcome(data);
    } else {
      res = await TransactionService.postTransfer(data);
    }

    if (res) {
      handleForm();
      getData();
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        description: "---",
        type: formType,
        category: "",
        subcategory: "",
        quantity: 0,
        amount: 0,
        date: new Date(),
        recipient: 0,
        account: 0,
        from: 0,
        to: 0,
        debt: 0
      });
    }
  }, [isSubmitSuccessful, reset, formType]);

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <StyledGrid item xs={12} sm={6}>
            <InputSelect label="Type *" name="type" control={control}>
              {loadTypes()}
            </InputSelect>
          </StyledGrid>
          <StyledGrid item xs={12} sm={6}>
            <InputDatePicker control={control} name="date" label="Date *" />
          </StyledGrid>
          {type ? (
            <>
              <StyledGrid item xs={12} sm={6}>
                <InputSelect
                  error={errors.category?.message}
                  control={control}
                  label="Category *"
                  name="category"
                >
                  {selectedType !== -1 && loadCategories()}
                </InputSelect>
              </StyledGrid>
              <StyledGrid item xs={12} sm={6}>
                <InputSelect
                  error={errors.subcategory?.message}
                  control={control}
                  label="Sub-category *"
                  name="subcategory"
                >
                  {categoryIndex !== -1 && loadSubCategories()}
                  {!categoryIndex && <MenuItem value={0}>---</MenuItem>}
                </InputSelect>
              </StyledGrid>
              <StyledGrid item xs={12} sm={6}>
                <InputSelect
                  label="Recipient"
                  name="recipient"
                  control={control}
                >
                  <MenuItem value={0}>---</MenuItem>
                  {loadRecipients()}
                </InputSelect>
              </StyledGrid>
              <StyledGrid item xs={12} sm={6}>
                <InputSelect label="Account" name="account" control={control}>
                  <MenuItem value={0}>---</MenuItem>
                  {loadAccounts()}
                </InputSelect>
              </StyledGrid>
            </>
          ) : (
            <>
              <StyledGrid item xs={12} sm={6}>
                <InputSelect label="From *" name="from" control={control}>
                  <MenuItem value={0}>---</MenuItem>
                  {loadAccounts()}
                </InputSelect>
              </StyledGrid>
              <StyledGrid item xs={12} sm={6}>
                <InputSelect label="To *" name="to" control={control}>
                  <MenuItem value={0}>---</MenuItem>
                  {loadAccounts()}
                </InputSelect>
              </StyledGrid>
            </>
          )}
          <StyledGrid item xs={12}>
            <InputTextField
              error={Boolean(errors.description?.message)}
              helperText={errors.description?.message}
              control={control}
              label="Description"
              name="description"
              type="text"
            />
          </StyledGrid>
          {type && (
            <StyledGrid item xs={12} sm={6}>
              <InputTextField
                error={Boolean(errors.quantity?.message)}
                helperText={errors.quantity?.message}
                control={control}
                label="Quantity"
                name="quantity"
                type="number"
                type="text"
                InputProps={{
                  inputProps: {
                    min: 0,
                    inputMode: "numeric",
                    pattern: "([0-9]*[.])?[0-9]+$|^$"
                  }
                }}
              />
            </StyledGrid>
          )}
          <StyledGrid item xs={12} sm={6}>
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
          </StyledGrid>
          {type && (
            <StyledGrid item xs={12} sm={6}>
              <InputSelect label="Debt" name="debt" control={control}>
                <MenuItem value={0}>---</MenuItem>
                {loadDebts()}
              </InputSelect>
            </StyledGrid>
          )}
          <StyledGrid item xs={12} sm={6}>
            <InputSelect label="Shop" name="shop" control={control}>
              <MenuItem value={0}>---</MenuItem>
              {loadShops()}
            </InputSelect>
          </StyledGrid>
          <Grid container item spacing={1}>
            <Grid item xs={12} sm={6}>
              <ActionButton text="Cancel" action={handleForm} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormButton text="Save" />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </StyledContainer>
  );
};

Form.defaultProps = {
  transaction: {}
};

Form.propTypes = {
  formType: PropTypes.string,
  transaction: PropTypes.object,
  categories: PropTypes.array.isRequired,
  recipients: PropTypes.array.isRequired,
  accounts: PropTypes.array.isRequired,
  debts: PropTypes.array.isRequired,
  shops: PropTypes.array.isRequired,
  getData: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired
};

export default Form;
