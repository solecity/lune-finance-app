// base
import React, { useState } from "react";
import PropTypes from "prop-types";

// libraries
import { useRecoilValue } from "recoil";

// api
import CategoryService from "shared/services/category";

// external components
import { Pencil } from "@styled-icons/boxicons-regular/Pencil";
import { TrashAlt } from "@styled-icons/boxicons-regular/TrashAlt";

// custom components
import {
  Table,
  ColourCard,
  IconButton,
  ConfirmDelete
} from "shared/components";

// styled components
import { StyledCenterColumn } from "./styles";

// atom
import { settingsState } from "shared/recoil/atoms";

const CategoriesTable = ({ data, getData }) => {
  const settings = useRecoilValue(settingsState);

  const [category, setCategory] = useState({});
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
      Header: "Type",
      id: "type",
      key: "type",
      align: "center",
      accessor: ({ type }) => type || "---",
      Cell: (row) => <StyledCenterColumn>{row.value}</StyledCenterColumn>
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
      Header: "Monthly Budget",
      id: "monthlyBudget",
      key: "monthlyBudget",
      align: "center",
      accessor: ({ monthlyBudget }) => monthlyBudget || 0,
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
      Cell: ({ row }) => (
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
            action={() => handleConfirm(row.original)}
          />
        </StyledCenterColumn>
      )
    }
  ];

  const handleConfirm = (category) => {
    setOpenConfirm(!openConfirm);
    setCategory(category);
  };

  const handleDelete = async () => {
    const res = await CategoryService.deleteOne(category._id);

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
        item="category"
        name={category.name}
      />
    </>
  );
};

CategoriesTable.propTypes = {
  data: PropTypes.array.isRequired,
  getData: PropTypes.func.isRequired,
  row: PropTypes.object
};

export default CategoriesTable;
