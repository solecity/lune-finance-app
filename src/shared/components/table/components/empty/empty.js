// base
import React from "react";
import PropTypes from "prop-types";

// styled components
import { StyledCell } from "./styles";

const EmptyTable = ({ emptyMessage, colCount }) => {
  return (
    <tbody>
      <tr>
        <StyledCell colSpan={colCount}>{emptyMessage}</StyledCell>
      </tr>
    </tbody>
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
