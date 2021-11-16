// base
import React, { useState, useEffect } from "react";

// api
import CategoryService from "shared/services/category";

// custom components
import { Modal } from "shared/components";
import { Toolbar, Form, Table } from "./components";

// styled components
import { StyledContainer } from "./styles";

const Categories = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const getData = async () => {
    const { data } = await CategoryService.getMany();

    setData(data.categories);
  };

  const handleForm = (value) => {
    setCategory(value);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledContainer>
      <Toolbar handleForm={handleForm} setIsEdit={setIsEdit} />
      <Table
        data={data}
        getData={getData}
        handleForm={handleForm}
        setIsEdit={setIsEdit}
      />
      <Modal
        name="category"
        handleModal={handleForm}
        isOpen={isOpen}
        isEdit={isEdit}
      >
        <Form
          category={category}
          handleForm={handleForm}
          getData={getData}
          isEdit={isEdit}
        />
      </Modal>
    </StyledContainer>
  );
};

Categories.propTypes = {};

export default Categories;
