// base
import React from "react";
import PropTypes from "prop-types";

// external components
import { Pencil } from "@styled-icons/boxicons-regular/Pencil";
import { TrashAlt } from "@styled-icons/boxicons-regular/TrashAlt";

// custom components
import { Table, ActionButton } from "shared/components";

const TransactionsTable = () => {
  const COLUMNS = [
    {
      Header: "Date",
      id: "date",
      key: "date",
      accessor: ({ date }) => date || "",
      Cell: (row) => <div>{row.value}</div>
    },
    {
      Header: "Category",
      id: "category",
      key: "category",
      align: "center",
      accessor: ({ category }) => category || "",
      Cell: (row) => <div>{row.value}</div>
    },
    {
      Header: "Sub-Category",
      id: "subCategory",
      key: "subCategory",
      align: "center",
      accessor: ({ subCategory }) => subCategory || "",
      Cell: (row) => <div>{row.value}</div>
    },
    {
      Header: "Description",
      id: "description",
      key: "description",
      align: "center",
      accessor: ({ description }) => description || "",
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
      accessor: ({ amount }) => amount || 0,
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

  return <Table columns={COLUMNS} data={[]} />;
};

TransactionsTable.propTypes = {
  row: PropTypes.object
};

export default TransactionsTable;
