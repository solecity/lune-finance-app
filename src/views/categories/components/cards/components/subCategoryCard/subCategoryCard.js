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

const SubCategoryCard = ({ subCategory }) => {
  const settings = useRecoilValue(settingsState);

  const [openConfirm, setOpenConfirm] = useState(false);

  const bg =
    settings.theme === CONSTANTS.LIGHT ? COLOURS.WHITE : COLOURS.SECONDARY_DARK;

  const bgHover =
    settings.theme === CONSTANTS.LIGHT
      ? COLOURS.ACCENT_LIGHT
      : COLOURS.ACCENT_DARK;

  const boxShadow =
    settings.theme === CONSTANTS.LIGHT
      ? COLOURS.BOX_SHADOW
      : COLOURS.BOX_SHADOW;

  const font =
    settings.theme === CONSTANTS.LIGHT
      ? COLOURS.SECONDARY_LIGHT
      : COLOURS.SECONDARY_DARK;

  const colour = {
    bg,
    bgHover,
    boxShadow,
    font,
    inset: "",
    insetHover: "inset"
  };

  const openForm = () => {
    console.log("open");
  };

  const handleConfirm = () => setOpenConfirm(!openConfirm);

  return (
    <StyledCard>
      <StyledContent container spacing={1}>
        <StyledTypography container item xs={10}>
          <Grid item>
            <Typography component="div" variant="body2" noWrap>
              {subCategory.name}
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
              action={openForm}
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
    </StyledCard>
  );
};

SubCategoryCard.propTypes = {
  subCategory: PropTypes.object.isRequired
};

export default SubCategoryCard;
