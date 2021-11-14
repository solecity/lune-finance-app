// base
import React from "react";
import PropTypes from "prop-types";

// external components
import { Pencil } from "@styled-icons/boxicons-regular/Pencil";
import { TrashAlt } from "@styled-icons/boxicons-regular/TrashAlt";

// custom components
import { Table, IconButton } from "shared/components";

const AccountsTable = ({ data }) => {
  const COLUMNS = [
    {
      Header: "Name",
      id: "name",
      key: "name",
      accessor: ({ name }) => name || "",
      Cell: (row) => <div>{row.value}</div>
    },
    {
      Header: "Image",
      id: "image",
      key: "image",
      align: "center",
      accessor: ({ image }) => image || "",
      Cell: (row) => <div>{row.value}</div>
    },
    {
      Header: "Amount",
      id: "amount",
      key: "amount",
      align: "center",
      accessor: ({ amount }) => amount || 0,
      Cell: (row) => <div>{row.value}</div>
    },
    {
      Header: "Expected Date",
      id: "expectedDate",
      key: "expectedDate",
      align: "center",
      accessor: ({ expectedDate }) => expectedDate || "",
      Cell: (row) => <div>{row.value}</div>
    },
    {
      Header: "Status",
      id: "status",
      key: "status",
      align: "center",
      accessor: ({ status }) => status || "",
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

AccountsTable.propTypes = {
  data: PropTypes.array.isRequired,
  row: PropTypes.object
};

export default AccountsTable;
