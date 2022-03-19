// base
import React from "react";

// external components
import { Container } from "shared/components";

const ComingSoon = () => {
  return (
    <Container>
      <h1
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        Coming soon
      </h1>
    </Container>
  );
};

ComingSoon.propTypes = {};

export default ComingSoon;
