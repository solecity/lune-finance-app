// base
import React from "react";
import PropTypes from "prop-types";

// external components
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const EmptyTable = ({ emptyMessage, colCount }) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell colSpan={colCount}>{emptyMessage}</TableCell>
      </TableRow>
    </TableBody>
  );
};

EmptyTable.defaultProps = {
  emptyMessage: "No results found..."
};

EmptyTable.propTypes = {
  emptyMessage: PropTypes.string.isRequired,
  colCount: PropTypes.number.isRequired
};

export default EmptyTable;
