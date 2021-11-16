// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { usePagination, useSortBy, useTable } from "react-table";

// external components
import Paper from "@mui/material/Paper";
import { default as MUITable } from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import TableFooter from "@mui/material/TableFooter";

// custom components
import { EmptyTable } from "./components";

// styled components
import { StyledContainer } from "./styles";

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } =
    useTable(
      {
        columns,
        data
      },
      useSortBy,
      usePagination,
      (hooks) => {
        hooks.allColumns.push((columns) => [...columns]);
      }
    );

  const RenderHeader = () => (
    <TableHead>
      {headerGroups.map((headerGroup) => (
        <TableRow key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <TableCell
              key={column.id}
              align={column.align}
              {...column.getHeaderProps(column.getSortByToggleProps())}
            >
              {column.render("Header")}
              <TableSortLabel
                active={column.isSorted}
                direction={column.isSortedDesc ? "desc" : "asc"}
              />
            </TableCell>
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
              <TableCell key={cell.getCellProps().key} {...cell.getCellProps()}>
                {cell.render("Cell")}
              </TableCell>
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
        <MUITable stickyHeader size="small" {...getTableProps()}>
          <RenderHeader />
          <RenderBody />
          <TableFooter>
            <TableRow></TableRow>
          </TableFooter>
        </MUITable>
      </StyledContainer>
    </Paper>
  );
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
};

export default Table;
