// base
import React, { useState, useEffect } from "react";

// api
import ShopService from "shared/services/shop";

// external components
import Container from "@mui/material/Container";

// custom components
import { Header, Toolbar, Modal } from "shared/components";
import { Form, Table } from "./components";

const Shops = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [shop, setShop] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const getData = async () => {
    setIsLoading(true);

    const { data } = await ShopService.getMany();

    setData(data.shops);
    setIsLoading(false);
  };

  const handleForm = (value) => {
    setShop(value);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getData();
  }, []);

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
