// base
import React, { useState } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";

// api
import TransactionService from "shared/services/transaction";

// external components
import { Pencil } from "@styled-icons/boxicons-regular/Pencil";
import { TrashAlt } from "@styled-icons/boxicons-regular/TrashAlt";
import { Check } from "@styled-icons/boxicons-regular/Check";
import { CheckDouble } from "@styled-icons/boxicons-regular/CheckDouble";

// custom components
import { Table, TableButton, ConfirmDelete } from "shared/components";

// styled components
import { StyledCenterColumn } from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

const TransactionsTable = ({
  isTransfer,
  data,
  getData,
  categories,
  recipients,
  accounts,
  handleForm,
  setIsEdit,
  total,
  currentPage,
  rowsPerPage,
  setCurrentPage
}) => {
  const settings = useRecoilValue(settingsState);

  const [transaction, setTransaction] = useState({});
  const [openConfirm, setOpenConfirm] = useState(false);

  const COLUMNS_INOUTCOME = [
    {
      Header: "",
      id: "isValidated",
      key: "isValidated",
      minWidth: 10,
      accessor: ({ isValidated }) => isValidated || false,
      Cell: ({ row }) => (
        <TableButton
          tooltip="Validate"
          hasIcon
          icon={row.original.isValidated ? <CheckDouble /> : <Check />}
          action={() => handleValidate(row.original)}
        />
      )
    },
    {
      Header: "Date",
      id: "date",
      key: "date",
      minWidth: 80,
      accessor: ({ date }) => date || "---",
      Cell: (row) => <div>{row.value}</div>
    },
    {
      Header: "Category",
      id: "category",
      key: "category",
      align: "center",
      minWidth: 150,
      accessor: ({ category }) => category || "---",
      Cell: (row) => (
        <StyledCenterColumn>{getCategory(row.value)}</StyledCenterColumn>
      )
    },
    {
      Header: "Sub-Category",
      id: "subcategory",
      key: "subcategory",
      align: "center",
      minWidth: 150,
      accessor: ({ subcategory }) => subcategory || "---",
      Cell: (row) => (
        <StyledCenterColumn>{getSubCategory(row.value)}</StyledCenterColumn>
      )
    },
    {
      Header: "Recipient",
      id: "recipient",
      key: "recipient",
      align: "center",
      minWidth: 100,
      accessor: ({ recipient }) => recipient || "---",
      Cell: (row) => (
        <StyledCenterColumn>{getRecipient(row.value)}</StyledCenterColumn>
      )
    },
    {
      Header: "Description",
      id: "description",
      key: "description",
      minWidth: 180,
      accessor: ({ description }) => description || "---",
      Cell: (row) => <div>{row.value}</div>
    },
    {
      Header: "Amount",
      id: "amount",
      key: "amount",
      align: "center",
      minWidth: 80,
      accessor: ({ amount }) => amount || 0,
      Cell: (row) => (
        <StyledCenterColumn>
          {row.value} {settings.currencySymbol}
        </StyledCenterColumn>
      )
    },
    {
      Header: "Quantity",
      id: "quantity",
      key: "quantity",
      align: "center",
      minWidth: 80,
      accessor: ({ quantity }) => quantity || 0,
      Cell: (row) => (
        <StyledCenterColumn>
          {row.value === 0 ? "*" : row.value}
        </StyledCenterColumn>
      )
    },
    {
      Header: "Actions",
      key: "actions",
      align: "center",
      minWidth: 80,
      disableSortBy: true,
      Cell: ({ row }) => (
        <StyledCenterColumn>
          <TableButton
            tooltip="Edit"
            hasIcon
            icon={<Pencil />}
            action={() => handleEdit(row.original)}
          />
          <TableButton
            tooltip="Delete"
            hasIcon
            icon={<TrashAlt />}
            action={() => handleConfirm(row.original)}
          />
        </StyledCenterColumn>
      )
    }
  ];

  const COLUMNS_TRANSFER = [
    {
      Header: "",
      id: "isValidated",
      key: "isValidated",
      minWidth: 10,
      accessor: ({ isValidated }) => isValidated || false,
      Cell: ({ row }) => (
        <TableButton
          tooltip="Validate"
          hasIcon
          icon={row.original.isValidated ? <CheckDouble /> : <Check />}
          action={() => handleValidate(row.original)}
        />
      )
    },
    {
      Header: "Date",
      id: "date",
      key: "date",
      minWidth: 70,
      accessor: ({ date }) => date || "---",
      Cell: (row) => <div>{row.value}</div>
    },
    {
      Header: "From",
      id: "from",
      key: "from",
      align: "center",
      minWidth: 160,
      accessor: ({ from }) => from || "---",
      Cell: (row) => (
        <StyledCenterColumn>{getAccount(row.value)}</StyledCenterColumn>
      )
    },
    {
      Header: "To",
      id: "to",
      key: "to",
      align: "center",
      minWidth: 160,
      accessor: ({ to }) => to || "---",
      Cell: (row) => (
        <StyledCenterColumn>{getAccount(row.value)}</StyledCenterColumn>
      )
    },
    {
      Header: "Description",
      id: "description",
      key: "description",
      minWidth: 180,
      accessor: ({ description }) => description || "---",
      Cell: (row) => <div>{row.value}</div>
    },
    {
      Header: "Amount",
      id: "amount",
      key: "amount",
      align: "center",
      minWidth: 80,
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
      minWidth: 80,
      disableSortBy: true,
      Cell: ({ row }) => (
        <StyledCenterColumn>
          <TableButton
            tooltip="Edit"
            hasIcon
            icon={<Pencil />}
            action={() => handleEdit(row.original)}
          />
          <TableButton
            tooltip="Delete"
            hasIcon
            icon={<TrashAlt />}
            action={() => handleConfirm(row.original)}
          />
        </StyledCenterColumn>
      )
    }
  ];

  const getCategory = (value) => {
    let name = "";

    categories.forEach((el) => {
      if (el._id === value) name = el.name;
    });

    return name;
  };

  const getSubCategory = (value) => {
    let name = "";

    categories.forEach((el) => {
      el.subcategories.forEach((el) => {
        if (el._id === value) name = el.name;
      });
    });

    return name;
  };

  const getRecipient = (value) => {
    let name = "---";

    recipients.forEach((el) => {
      if (el._id === value) name = el.name;
    });

    return name;
  };

  const getAccount = (value) => {
    let name = "---";

    accounts.forEach((el) => {
      if (el._id === value) {
        name = `${el.name} (${el.type})`;
      }
    });

    return name;
  };

  const handleEdit = (transaction) => {
    setIsEdit(true);

    handleForm(transaction);
  };

  const handleConfirm = (transaction) => {
    setOpenConfirm(!openConfirm);
    setTransaction(transaction);
  };

  const handleDelete = async () => {
    const res = await TransactionService.deleteOne(transaction._id);

    if (res) {
      setOpenConfirm(false);
      getData();
    }
  };

  const handleValidate = async (transaction) => {
    const res = await TransactionService.validateTransaction(transaction._id);

    if (res) {
      getData();
    }
  };

  const COLUMNS = isTransfer ? COLUMNS_TRANSFER : COLUMNS_INOUTCOME;

  return (
    <>
      <Table
        columns={COLUMNS}
        data={data}
        total={total}
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        setCurrentPage={setCurrentPage}
      />
      <ConfirmDelete
        open={openConfirm}
        handleClose={handleConfirm}
        handleDelete={handleDelete}
        item="transaction"
        name={transaction.description}
      />
    </>
  );
};

TransactionsTable.defaultProps = {
  isTransfer: false
};

TransactionsTable.propTypes = {
  isTransfer: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  getData: PropTypes.func.isRequired,
  categories: PropTypes.array,
  recipients: PropTypes.array,
  accounts: PropTypes.array,
  handleForm: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  row: PropTypes.object
};

export default TransactionsTable;
