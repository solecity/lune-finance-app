// base
import React from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";

// external components
import { Pencil } from "@styled-icons/boxicons-regular/Pencil";
import { TrashAlt } from "@styled-icons/boxicons-regular/TrashAlt";

// custom components
import { Table, IconButton } from "shared/components";

// styled components
import { StyledCenterColumn } from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

const TransactionsTable = ({ data, accounts }) => {
  const settings = useRecoilValue(settingsState);

  const COLUMNS = [
    {
      Header: "Date",
      id: "date",
      key: "date",
      accessor: ({ date }) => date || "---",
      Cell: (row) => <StyledCenterColumn>{row.value}</StyledCenterColumn>
    },
    {
      Header: "Category",
      id: "category",
      key: "category",
      align: "center",
      accessor: ({ category }) => category || "---",
      Cell: (row) => <StyledCenterColumn>{row.value}</StyledCenterColumn>
    },
    {
      Header: "Sub-Category",
      id: "subcategory",
      key: "subcategory",
      align: "center",
      accessor: ({ subcategory }) => subcategory || "---",
      Cell: (row) => <StyledCenterColumn>{row.value}</StyledCenterColumn>
    },
    {
      Header: "Description",
      id: "description",
      key: "description",
      align: "center",
      accessor: ({ description }) => description || "---",
      Cell: (row) => <div>{row.value}</div>
    },
    {
      Header: "Recipient",
      id: "recipient",
      key: "recipient",
      align: "center",
      accessor: ({ recipient }) => recipient || "---",
      Cell: (row) => <StyledCenterColumn>{row.value}</StyledCenterColumn>
    },
    {
      Header: "Account",
      id: "account",
      key: "account",
      align: "center",
      accessor: ({ account }) => account || "---",
      Cell: (row) => (
        <StyledCenterColumn>{getAccount(row.value)}</StyledCenterColumn>
      )
    },
    {
      Header: "Quantity",
      id: "quantity",
      key: "quantity",
      align: "center",
      accessor: ({ quantity }) => quantity || "---",
      Cell: (row) => <StyledCenterColumn>{row.value}</StyledCenterColumn>
    },
    {
      Header: "Amount",
      id: "amount",
      key: "amount",
      align: "center",
      accessor: ({ amount }) => amount || 0,
      Cell: (row) => (
        <StyledCenterColumn>
          {row.value} {settings.currencySymbol}
        </StyledCenterColumn>
      )
    },
    {
      Header: "Actions",
      key: "actions",
      align: "center",
      disableSortBy: true,
      accessor: ({ row }) => (
        <StyledCenterColumn>
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
        </StyledCenterColumn>
      )
    }
  ];

  const getAccount = (value) => {
    accounts.forEach((el) => {
      if (el._id === value) value = el.name;
    });

    return value;
  };

  return <Table columns={COLUMNS} data={data} />;
};

TransactionsTable.propTypes = {
  data: PropTypes.array.isRequired,
  accounts: PropTypes.array.isRequired,
  row: PropTypes.object
};

export default TransactionsTable;
