// libraries
import styled from "styled-components";

// external components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link, { linkClasses } from "@mui/material/Link";
import Typography, { typographyClasses } from "@mui/material/Typography";

const StyledContainer = styled(Container)`
  height: 100vh;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledGrid = styled(Grid)`
  justify-content: center;
`;

const StyledTitle = styled(Typography)(() => ({
  [`&.${typographyClasses.root}`]: {
    marginBottom: "16px"
  }
}));

const StyledLink = styled(Link)(({ theme }) => ({
  [`&.${linkClasses.root}`]: {
    marginTop: "10px",
    textDecoration: "none",
    color: `${theme.colours.primary} !important`,

    "&:hover": {
      color: `${theme.colours.secondary} !important`
    }
  }
}));

export { StyledContainer, StyledGrid, StyledTitle, StyledLink };
