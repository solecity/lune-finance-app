// base
import React, { useState } from "react";
import PropTypes from "prop-types";

// api
import ShopService from "shared/services/shop";

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

const ShopsTable = ({
  data,
  getData,
  handleForm,
  setIsEdit,
  total,
  currentPage,
  rowsPerPage,
  setCurrentPage
}) => {
  const [shop, setShop] = useState({});
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

  const handleEdit = (shop) => {
    setIsEdit(true);

    handleForm(shop);
  };

  const handleConfirm = (shop) => {
    setOpenConfirm(!openConfirm);
    setShop(shop);
  };

  const handleDelete = async () => {
    const res = await ShopService.deleteOne(shop._id);

    if (res) {
      setOpenConfirm(false);
      getData();
    }
  };

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
        item="shop"
        name={shop.name}
      />
    </>
  );
};

ShopsTable.propTypes = {
  data: PropTypes.array.isRequired,
  getData: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  row: PropTypes.object
};

export default ShopsTable;
