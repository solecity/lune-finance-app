// base
import React, { useState } from "react";
import PropTypes from "prop-types";

// libraries
import { usePagination, useSortBy, useTable } from "react-table";

// external components
import Paper from "@mui/material/Paper";
import { default as MUITable } from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

// custom components
import { EmptyTable, Pagination } from "./components";

// styled components
import {
  StyledContainer,
  StyledHeadCell,
  StyledBodyCell,
  StyledScroll
} from "./styles";

const Table = ({
  columns,
  data,
  total,
  currentPage,
  rowsPerPage,
  setCurrentPage
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } =
    useTable(
      {
        columns,
        data,
        manualPagination: true
      },
      useSortBy,
      usePagination,
      (hooks) => {
        hooks.allColumns.push((columns) => [...columns]);
      }
    );

  const handleChangePage = (e, newPage) => {
    setCurrentPage(newPage);
  };

  const RenderHeader = () => (
    <TableHead>
      {headerGroups.map((headerGroup) => (
        <TableRow key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <StyledHeadCell
              key={column.id}
              align={column.align}
              width={column.minWidth}
              {...column.getHeaderProps(column.getSortByToggleProps())}
            >
              {column.render("Header")}
              <TableSortLabel
                active={column.isSorted}
                direction={column.isSortedDesc ? "desc" : "asc"}
              />
            </StyledHeadCell>
          ))}
        </TableRow>
      ))}
    </TableHead>
  );

  const RenderBody = () => (
    <TableBody
      {...getTableBodyProps()}
      component={!Boolean(data.length) ? Empty : "tbody"}
    >
      {page.map((row) => {
        prepareRow(row);

        return (
          <TableRow key={row.getRowProps().key} {...row.getRowProps()}>
            {row.cells.map((cell) => (
              <StyledBodyCell
                key={cell.getCellProps().key}
                {...cell.getCellProps()}
              >
                {cell.render("Cell")}
              </StyledBodyCell>
            ))}
          </TableRow>
        );
      })}
    </TableBody>
  );

  const Empty = () => <EmptyTable colCount={columns.length} />;

  return (
    <Paper>
      <StyledContainer>
        <StyledScroll>
          <MUITable stickyHeader size="small" {...getTableProps()}>
            <RenderHeader />
            <RenderBody />
          </MUITable>
        </StyledScroll>
      </StyledContainer>
      <Pagination
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        count={total}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired
};

export default Table;
