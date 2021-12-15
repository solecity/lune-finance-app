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

const SignUp = () => {
  const history = useHistory();

  const handleSubmit = () => history.push("/");

  const handleRedirect = () => history.push("/signin");

  return (
    <StyledContainer>
      <StyledTitle variant="h6">LUNE</StyledTitle>
      <StyledGrid container>
        <Grid item xs={12} sm={7}>
          <Form onSubmitSuccess={handleSubmit} />
          <StyledLink
            component="button"
            variant="body2"
            onClick={handleRedirect}
          >
            Already have an account?
          </StyledLink>
        </Grid>
      </StyledGrid>
    </StyledContainer>
  );
};

SignUp.propTypes = {};

export default SignUp;
