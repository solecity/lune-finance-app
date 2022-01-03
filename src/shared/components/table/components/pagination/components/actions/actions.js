// base
import React from "react";
import PropTypes from "prop-types";

// external components
import { FirstPage } from "@styled-icons/boxicons-regular/FirstPage";
import { LastPage } from "@styled-icons/boxicons-regular/LastPage";
import { ChevronLeft } from "@styled-icons/boxicons-regular/ChevronLeft";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";

// styled components
import { StyledActions, StyledIcon } from "./styles";

const Actions = ({ page, rowsPerPage, count, onPageChange }) => {
  const handleFirstPage = (e) => onPageChange(e, 1);

  const handleBack = (e) => onPageChange(e, page - 1);

  const handleNext = (e) => onPageChange(e, page + 1);

  const handleLastPage = (e) => onPageChange(e, count);

  return (
    <StyledActions>
      <StyledIcon
        onClick={handleFirstPage}
        disabled={page === 1}
        aria-label="first page"
      >
        <FirstPage />
      </StyledIcon>
      <StyledIcon
        onClick={handleBack}
        disabled={page === 1}
        aria-label="previous page"
      >
        <ChevronLeft />
      </StyledIcon>
      <StyledIcon
        onClick={handleNext}
        disabled={page >= Math.ceil(count / rowsPerPage)}
        aria-label="next page"
      >
        <ChevronRight />
      </StyledIcon>
      <StyledIcon
        onClick={handleLastPage}
        disabled={page >= Math.ceil(count / rowsPerPage)}
        aria-label="last page"
      >
        <LastPage />
      </StyledIcon>
    </StyledActions>
  );
};

Actions.propTypes = {
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Actions;
