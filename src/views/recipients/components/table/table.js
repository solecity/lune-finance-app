// base
import React, { useState } from "react";
import PropTypes from "prop-types";

// api
import RecipientService from "shared/services/recipient";

// external components
import { Pencil } from "@styled-icons/boxicons-regular/Pencil";
import { TrashAlt } from "@styled-icons/boxicons-regular/TrashAlt";

// custom components
import {
  Table,
  ColourCard,
  TableButton,
  ConfirmDelete
} from "shared/components";

// styled components
import { StyledCenterColumn } from "./styles";

const RecipientsTable = ({ data, getData, handleForm, setIsEdit }) => {
  const [recipient, setRecipient] = useState({});
  const [openConfirm, setOpenConfirm] = useState(false);

  const COLUMNS = [
    {
      Header: "Name",
      id: "name",
      key: "name",
      accessor: ({ name }) => name || "---",
      Cell: (row) => <div>{row.value}</div>
    },
    {
      Header: "Colour",
      id: "colour",
      key: "colour",
      align: "center",
      accessor: ({ colour }) => colour || "---",
      Cell: (row) => (
        <StyledCenterColumn>
          <ColourCard colour={row.value} />
        </StyledCenterColumn>
      )
    },
    {
      Header: "Actions",
      key: "actions",
      align: "center",
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

  const handleEdit = (recipient) => {
    setIsEdit(true);

    handleForm(recipient);
  };

  const handleConfirm = (recipient) => {
    setOpenConfirm(!openConfirm);
    setRecipient(recipient);
  };

  const handleDelete = async () => {
    const res = await RecipientService.deleteOne(recipient._id);

    if (res) {
      setOpenConfirm(false);
      getData();
    }
  };

  return (
    <>
      <Table columns={COLUMNS} data={data} />
      <ConfirmDelete
        open={openConfirm}
        handleClose={handleConfirm}
        handleDelete={handleDelete}
        item="recipient"
        name={recipient.name}
      />
    </>
  );
};

RecipientsTable.propTypes = {
  data: PropTypes.array.isRequired,
  getData: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired,
  row: PropTypes.object
};

export default RecipientsTable;
