// base
import React, { useState } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";

// api
import CategoryService from "shared/services/category";

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
  StyledColour,
  StyledButton
} from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

// constants
import { CONSTANTS, TYPES, COLOURS } from "constants/general";

const CategoryCard = ({
  getData,
  handleForm,
  category,
  setCategory,
  setIsEdit
}) => {
  const settings = useRecoilValue(settingsState);

  const [openConfirm, setOpenConfirm] = useState(false);

  const hasBudget = category.type === TYPES.CATEGORY[0].value;

  const bg =
    settings.theme === CONSTANTS.LIGHT
      ? COLOURS.ACCENT_LIGHT
      : COLOURS.ACCENT_DARK;

  const bgHover =
    settings.theme === CONSTANTS.LIGHT
      ? COLOURS.SECONDARY_LIGHT
      : COLOURS.SECONDARY_DARK;

  const font =
    settings.theme === CONSTANTS.LIGHT ? COLOURS.WHITE : COLOURS.SECONDARY_DARK;

  const colour = {
    bg,
    bgHover,
    font,
    inset: "inset",
    insetHover: ""
  };

  const handleEdit = () => {
    setIsEdit(true);
    setCategory(category);

    handleForm();
  };

  const handleConfirm = () => setOpenConfirm(!openConfirm);

  const handleDelete = async () => {
    const res = await CategoryService.deleteOne(category._id);

    if (res) {
      setOpenConfirm(false);
      getData();
    }
  };

  return (
    <StyledCard>
      <StyledContent container spacing={1}>
        <Grid container item xs={1}>
          <StyledColour colour={category.colour} />
        </Grid>
        <StyledGrid container item xs={hasBudget ? 5 : 9}>
          <Typography component="div" variant="body2" noWrap>
            {category.name}
          </Typography>
        </StyledGrid>
        {hasBudget && (
          <StyledGrid container item xs={4} justifyContent="flex-end">
            <Typography component="div" variant="body2">
              {category.monthlyBudget} {settings.currencySymbol}
            </Typography>
          </StyledGrid>
        )}
        <Grid container item xs={2} direction="column">
          <StyledButton item xs={2} className="bottom">
            <ActionButton
              isAction={false}
              isSmall={true}
              icon={<Pencil />}
              colour={colour}
              action={handleEdit}
            />
          </StyledButton>
          <Grid item xs={2}>
            <ActionButton
              isAction={false}
              isSmall={true}
              icon={<TrashAlt />}
              colour={colour}
              action={handleConfirm}
            />
          </Grid>
        </Grid>
      </StyledContent>
      <ConfirmDelete
        open={openConfirm}
        handleClose={handleConfirm}
        handleDelete={handleDelete}
        item="category"
        name={category.name}
      />
    </StyledCard>
  );
};

CategoryCard.propTypes = {
  getData: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
  setCategory: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired
};

export default CategoryCard;
