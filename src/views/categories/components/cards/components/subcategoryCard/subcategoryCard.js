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
  StyledTypography,
  StyledButton
} from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

// constants
import { CONSTANTS, COLOURS } from "constants/general";

const SubCategoryCard = ({
  getData,
  handleForm,
  category,
  subcategory,
  setSubCategory,
  setIsEditSub
}) => {
  const settings = useRecoilValue(settingsState);

  const [openConfirm, setOpenConfirm] = useState(false);

  const bg =
    settings.theme === CONSTANTS.LIGHT ? COLOURS.WHITE : COLOURS.SECONDARY_DARK;

  const bgHover =
    settings.theme === CONSTANTS.LIGHT
      ? COLOURS.ACCENT_LIGHT
      : COLOURS.ACCENT_DARK;

  const font =
    settings.theme === CONSTANTS.LIGHT
      ? COLOURS.SECONDARY_LIGHT
      : COLOURS.WHITE;

  const colour = {
    bg,
    bgHover,
    font,
    inset: "",
    insetHover: "inset"
  };

  const handleEdit = () => {
    setIsEditSub(true);
    setSubCategory({ ...subcategory, category });

    handleForm();
  };

  const handleConfirm = () => setOpenConfirm(!openConfirm);

  const handleDelete = async () => {
    subcategory.action = "delete";

    const res = await CategoryService.patchSubCategory(
      category._id,
      subcategory._id,
      subcategory
    );

    if (res) {
      setOpenConfirm(false);
      getData();
    }
  };

  return (
    <StyledCard>
      <StyledContent container spacing={1}>
        <StyledTypography container item xs={10}>
          <Grid item>
            <Typography component="div" variant="body2" noWrap>
              {subcategory.name}
            </Typography>
          </Grid>
        </StyledTypography>
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
        item="sub-category"
        name={subcategory.name}
      />
    </StyledCard>
  );
};

SubCategoryCard.propTypes = {
  getData: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
  subcategory: PropTypes.object.isRequired,
  setSubCategory: PropTypes.func.isRequired,
  setIsEditSub: PropTypes.func.isRequired
};

export default SubCategoryCard;
