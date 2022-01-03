// base
import React, { useState, memo } from "react";
import PropTypes from "prop-types";

// external components
import TablePagination from "@mui/material/TablePagination";

// custom components
import { Actions } from "./components";

const Pagination = ({ currentPage, rowsPerPage, count, onPageChange }) => {
  return (
    <TablePagination
      rowsPerPageOptions={[]}
      component="div"
      count={count}
      page={currentPage - 1}
      rowsPerPage={rowsPerPage}
      onPageChange={onPageChange}
      ActionsComponent={(props) => <Actions {...props} page={currentPage} />}
    />
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default memo(Pagination);
