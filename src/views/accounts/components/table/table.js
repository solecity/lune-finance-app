// base
import React from "react";
import PropTypes from "prop-types";

// external components
import { Pencil } from "@styled-icons/boxicons-regular/Pencil";
import { TrashAlt } from "@styled-icons/boxicons-regular/TrashAlt";

// custom components
import { Table, ActionButton } from "shared/components";

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
      Header: "Type",
      id: "type",
      key: "type",
      align: "center",
      accessor: ({ type }) => type || "",
      Cell: (row) => <div>{row.value}</div>
    },
    {
      Header: "Card",
      id: "hasCard",
      key: "hasCard",
      align: "center",
      accessor: ({ hasCard }) => hasCard || "",
      Cell: (row) => <div>{row.value}</div>
    },
    {
      Header: "Balance",
      id: "balance",
      key: "balance",
      align: "center",
      accessor: ({ balance }) => balance || "",
      Cell: (row) => <div>{row.value}</div>
    },
    {
      Header: "Actions",
      key: "actions",
      align: "center",
      disableSortBy: true,
      accessor: ({ row }) => (
        <div>
          <ActionButton
            tooltip="Edit"
            hasIcon
            icon={<Pencil />}
            action={() => {}}
          />
          <ActionButton
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
