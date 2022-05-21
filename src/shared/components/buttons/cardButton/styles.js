// libraries
import styled from "styled-components";
import { alpha } from "@mui/material/styles";

// external components
import { buttonClasses } from "@mui/material/Button";

// custom components
import { StyledButton } from "styles/default";

const StyledCardButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colours.secondaryLight};
  height: ${({ theme }) => theme.spacing.s8};
  border: ${({ theme }) => theme.borders.actionDefault};
  box-shadow: none;

  svg {
    height: ${({ theme }) => theme.spacing.s5};
    width: ${({ theme }) => theme.spacing.s5};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colours.secondaryDark};
  }
`;

const StyledSmallCardButton = styled(StyledButton)(({ colour, theme }) => ({
  [`&.${buttonClasses.root}`]: {
    backgroundColor: colour.bg,
    boxShadow: `${colour.inset} 0px 2px 4px ${alpha(
      theme.colours.boxShadow,
      0.3
    )}`,
    minWidth: "0 !important",
    padding: "6px !important",
    color: `${colour.font} !important`,

    "&:hover": {
      backgroundColor: `${colour.bgHover} !important`,
      boxShadow: `${colour.insetHover} 0px 2px 4px ${alpha(
        theme.colours.boxShadow,
        0.3
      )}`
    },

    svg: {
      width: "1.1rem"
    }
  }
}));

export { StyledCardButton, StyledSmallCardButton };
