// base
import React from "react";
import PropTypes from "prop-types";

// custom components
import { MessageButton } from "shared/components";

// styled components
import { StyledOverlay, StyledDialog } from "styles/default";
import { StyledText, StyledButtons } from "./styles";

const ConfirmDelete = ({ isOpen, handleClose, handleDelete, item, name }) => {
  return (
    <StyledOverlay className={isOpen ? "overlay" : null}>
      <StyledDialog open={isOpen} onClose={handleClose}>
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
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
  name: PropTypes.string
};

export default ConfirmDelete;
