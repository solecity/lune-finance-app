// base
import React from "react";
import PropTypes from "prop-types";

// external components
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

// styled components
import { StyledContent } from "./styles";

const Modal = ({ title, open, handleModal, children }) => {
  return (
    <Dialog open={open} onClose={handleModal}>
      <DialogTitle>{title}</DialogTitle>
      <StyledContent>{children}</StyledContent>
    </Dialog>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  handleModal: PropTypes.func,
  children: PropTypes.any
};

export default Modal;
