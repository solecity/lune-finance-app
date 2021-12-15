// base
import React from "react";

// libraries
import { useHistory } from "react-router-dom";

// external components
import Grid from "@mui/material/Grid";

// custom components
import { Form } from "./components";

// styled components
import { StyledContainer, StyledGrid, StyledTitle, StyledLink } from "./styles";

const SignIn = () => {
  const history = useHistory();

  const handleSubmit = () => history.push("/");

  const handleRedirect = () => history.push("/signup");

  return (
    <StyledContainer>
      <StyledTitle variant="h6">LUNE</StyledTitle>
      <StyledGrid container>
        <Grid item xs={12} sm={4}>
          <Form onSubmitSuccess={handleSubmit} />
          <StyledLink
            component="button"
            variant="body2"
            onClick={handleRedirect}
          >
            Don't have an account?
          </StyledLink>
        </Grid>
      </StyledGrid>
    </StyledContainer>
  );
};

SignIn.propTypes = {};

export default SignIn;
