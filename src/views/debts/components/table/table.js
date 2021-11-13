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
      Header: "Recipient",
      id: "recipient",
      key: "recipient",
      align: "center",
      accessor: ({ recipient }) => recipient || "",
      Cell: (row) => <div>{row.value}</div>
    },
    {
      Header: "Amount",
      id: "amount",
      key: "amount",
      align: "center",
      accessor: ({ amount }) => amount || "",
      Cell: (row) => <div>{row.value}</div>
    },
    {
      Header: "Deadline",
      id: "deadline",
      key: "deadline",
      align: "center",
      accessor: ({ deadline }) => deadline || "",
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
