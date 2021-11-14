// base
import React from "react";
import PropTypes from "prop-types";

// external components
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

// styled components
import { StyledContent } from "./styles";

const Modal = ({ name, handleModal, isOpen, isEdit, children }) => {
  const title = isEdit ? `Edit ${name}` : `New ${name}`;

  return (
    <Dialog open={isOpen} onClose={handleModal}>
      <DialogTitle>{title}</DialogTitle>
      <StyledContent>{children}</StyledContent>
    </Dialog>
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
