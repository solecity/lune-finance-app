// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledOverlay, StyledDialog } from "styles/default";
import { StyledTitle } from "./styles";

const Modal = ({ name, handleModal, isOpen, isEdit, children }) => {
  const title = isEdit ? `Edit ${name}` : `New ${name}`;

  return (
    <StyledOverlay className={isOpen ? "overlay" : null}>
      <StyledDialog open={isOpen} onClose={handleModal}>
        <StyledTitle>{title}</StyledTitle>
        <div>{children}</div>
      </StyledDialog>
    </StyledOverlay>
  );
};

Modal.propTypes = {
  name: PropTypes.string,
  handleModal: PropTypes.func,
  isOpen: PropTypes.bool,
  isEdit: PropTypes.bool,
  children: PropTypes.any
};

export default Modal;
