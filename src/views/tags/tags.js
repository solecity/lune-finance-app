// base
import React from "react";

// external components
import Container from "@mui/material/Container";

// custom components
import { Header } from "shared/components";
import { Categories, Recipients } from "./components";

const Tags = () => {
  return (
    <Container>
      <Header title={"Tags"} />
      <Categories />
      <Recipients />
    </Container>
  );
};

export default Tags;
