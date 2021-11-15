// base
import React from "react";

// external components
import Container from "@mui/material/Container";

// custom components
import { Header } from "shared/components";
import { Tabs } from "./components";

const Tags = () => {
  return (
    <Container>
      <Header title={"Tags"} />
      <Tabs />
    </Container>
  );
};

export default Tags;
