// base
import React, { useState, useEffect } from "react";

// api
import AccountService from "shared/services/account";

// custom components
import {
  Container,
  Header,
  Tabs,
  Toolbar,
  ConfirmDelete
} from "shared/components";
// import { Modal } from "shared/components";
import { Cards, Form } from "./components";

// styled components
// import { StyledGrid } from "./styles";

const tabs = ["all", "cash", "bank", "savings", "investment", "crypto"];

const Accounts = () => {
  const [data, setData] = useState([]);
  const [account, setAccount] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [tab, setTab] = useState("all");
  const [selected, setSelected] = useState(tab);
  const [openConfirm, setOpenConfirm] = useState(false);

  const getData = async () => {
    const { data } = await AccountService.getMany();

    setData(data.accounts);
  };

  const handleForm = () => setIsOpen(!isOpen);

  const handleConfirm = () => setOpenConfirm(!openConfirm);

  const handleDelete = async () => {
    const res = await AccountService.deleteOne(account._id);

    if (res) {
      setOpenConfirm(false);
      getData();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container>
        <Header title={"Accounts"} />
        <Tabs
          tabs={tabs}
          setTab={setTab}
          selected={selected}
          setSelected={setSelected}
        />
        <Toolbar
          handleForm={handleForm}
          setIsEdit={setIsEdit}
          setElement={setAccount}
        />
        <Cards
          data={data}
          getData={getData}
          handleForm={handleForm}
          handleConfirm={handleConfirm}
          setAccount={setAccount}
          setIsEdit={setIsEdit}
        />
      </Container>

      <ConfirmDelete
        open={openConfirm}
        handleClose={handleConfirm}
        handleDelete={handleDelete}
        item="account"
        name={account.name}
      />
    </>

    //   <Modal
    //     name="account"
    //     handleModal={handleForm}
    //     isOpen={isOpen}
    //     isEdit={isEdit}
    //   >
    //     <Form
    //       account={account}
    //       handleForm={handleForm}
    //       getData={getData}
    //       isEdit={isEdit}
    //     />
    //   </Modal>
  );
};

Accounts.propTypes = {};

export default Accounts;
