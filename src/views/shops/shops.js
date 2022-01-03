// base
import React, { useState, useEffect } from "react";

// api
import ShopService from "shared/services/shop";

// external components
import Container from "@mui/material/Container";

// custom components
import { Header, Toolbar, Modal } from "shared/components";
import { Form, Table } from "./components";

import { DEFAULT } from "constants/general";

const Shops = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [shop, setShop] = useState({});
  const [total, setTotal] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const getData = async () => {
    setIsLoading(true);

    const query = {
      page: currentPage,
      perPage: DEFAULT.ROWS_PER_PAGE
    };

    const { data } = await ShopService.getMany(query);

    setData(data.shops);
    setTotal(data.total);
    setIsLoading(false);
  };

  const handleForm = (value) => {
    setShop(value);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getData();
  }, [currentPage]);

  return (
    <Container maxWidth="xl">
      <Header title={"Shops"} />
      <Toolbar
        handleForm={handleForm}
        setIsEdit={setIsEdit}
        setElement={setShop}
      />
      <Table
        data={data}
        getData={getData}
        handleForm={handleForm}
        setIsEdit={setIsEdit}
        total={total}
        currentPage={currentPage}
        rowsPerPage={DEFAULT.ROWS_PER_PAGE}
        setCurrentPage={setCurrentPage}
      />
      <Modal
        name="shop"
        handleModal={handleForm}
        isOpen={isOpen}
        isEdit={isEdit}
      >
        <Form
          shop={shop}
          handleForm={handleForm}
          getData={getData}
          isEdit={isEdit}
        />
      </Modal>
    </Container>
  );
};

Shops.propTypes = {};

export default Shops;
