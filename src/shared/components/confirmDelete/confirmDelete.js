// base
import React from "react";
import PropTypes from "prop-types";

// custom components
import { MessageButton } from "shared/components";

// styled components
import {
  StyledOverlay,
  StyledDialog,
  StyledText,
  StyledButtons
} from "./styles";

const ConfirmDelete = ({ open, handleClose, handleDelete, item, name }) => {
  return (
    <StyledOverlay className={open ? "overlay" : null}>
      <StyledDialog open={open} onClose={handleClose}>
        <StyledText>
          {`Are you sure you want to delete the ${item} "${name}"?`}
        </StyledText>
        <StyledButtons>
          <MessageButton
            className="secondary"
            text="Cancel"
            action={handleClose}
          />
          <MessageButton text="Confirm" action={handleDelete} />
        </StyledButtons>
      </StyledDialog>
    </StyledOverlay>
  );
};

ConfirmDelete.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  item: PropTypes.string,
  name: PropTypes.string
};

export default ConfirmDelete;
