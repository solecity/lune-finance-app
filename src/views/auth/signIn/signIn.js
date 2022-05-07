// base
import React from "react";

// libraries
import { useHistory } from "react-router-dom";

// custom components
import { Form } from "./components";

// styled components
import { StyledContainer, StyledTitle } from "./styles";

// logo
import { LogoHorizontal } from "shared/logoHorizontal";

const SignIn = () => {
  const history = useHistory();

  const handleSubmit = () => history.push("/");

  return (
    <StyledContainer>
      <StyledTitle>
        <LogoHorizontal />
      </StyledTitle>
      <Form onSubmitSuccess={handleSubmit} />
    </StyledContainer>
  );
};

SignIn.propTypes = {};

export default SignIn;
