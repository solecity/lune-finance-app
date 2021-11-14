// base
import React from "react";
import PropTypes from "prop-types";

// external components
import { Pencil } from "@styled-icons/boxicons-regular/Pencil";
import { TrashAlt } from "@styled-icons/boxicons-regular/TrashAlt";

// custom components
import { Table, IconButton } from "shared/components";

const CategoriesTable = ({ data }) => {
  const COLUMNS = [
    {
      Header: "Name",
      id: "name",
      key: "name",
      accessor: ({ name }) => name || "",
      Cell: (row) => <div>{row.value}</div>
    },
    {
      Header: "Colour",
      id: "colour",
      key: "colour",
      align: "center",
      accessor: ({ colour }) => colour || "",
      Cell: (row) => <div>{row.value}</div>
    },
    {
      Header: "Actions",
      key: "actions",
      align: "center",
      disableSortBy: true,
      accessor: ({ row }) => (
        <div>
          <IconButton
            tooltip="Edit"
            hasIcon
            icon={<Pencil />}
            action={() => {}}
          />
          <IconButton
            tooltip="Delete"
            hasIcon
            icon={<TrashAlt />}
            action={() => {}}
          />
        </div>
      )
    }
  ];

  return <Table columns={COLUMNS} data={data} />;
};

CategoriesTable.propTypes = {
  data: PropTypes.array.isRequired,
  row: PropTypes.object
};

export default CategoriesTable;
