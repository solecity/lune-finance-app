// base
import React from "react";
import PropTypes from "prop-types";

// external components
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const ConfirmDelete = ({ open, handleClose, handleDelete, item, name }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {`Are you sure you want to delete the ${item} "${name}"?`}
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDelete} autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
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
