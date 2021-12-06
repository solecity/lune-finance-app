// libraries
import styled from "styled-components";
import { alpha } from "@mui/material/styles";

// external components
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputBase, { inputBaseClasses } from "@mui/material/InputBase";
import InputLabel, { inputLabelClasses } from "@mui/material/InputLabel";

const StyledGrid = styled(Grid)`
  padding-bottom: 10px;
`;

const StyledPaper = styled(Paper)`
  padding: 16px;
`;

const StyledSelect = styled(InputBase)(({ theme }) => ({
  [`&.${inputBaseClasses.root}`]: {
    backgroundColor: theme.colours.inputBackground,
    height: "36px",
    width: "100%",
    padding: "0.35rem 0.75rem 0 0.75rem",
    boxShadow: `inset 0px 2px 4px ${theme.colours.boxShadow}`,
    border: "none",
    borderRadius: "0px",
    fontSize: "0.875rem"
  },

  [`&.Mui-focused`]: {
    height: "35px",
    paddingTop: 0,
    paddingBottom: 0,
    color: theme.colours.black,
    boxShadow: `inset 0px 2px 4px ${alpha(theme.colours.primary, 0.5)}`
  }
}));

const StyledLabel = styled(InputLabel)(() => ({
  [`&.${inputLabelClasses.root}`]: {
    transform: "translate(10px,3px) scale(0.9)",
    color: `${({ theme }) => alpha(theme.colours.black, 0.4)} !important`
  }
}));

const StyledIcon = styled(Grid)`
  width: 1.3rem;
  color: ${({ theme }) => theme.colours.grey};

  &.selected {
    color: ${({ theme }) => theme.colours.primary}
`;

const StyledSwitch = styled(Grid)(({ theme }) => ({
  margin: "5px 0 0 13px",
  alignItems: "center",

  "& .MuiSwitch-switchBase.Mui-checked": {
    color: theme.colours.secondary,

    "&:hover": {
      backgroundColor: alpha(theme.colours.accent, 0.4)
    }
  },

  "& .MuiSwitch-switchBase + .MuiSwitch-track": {
    backgroundColor: theme.colours.darkGrey
  },

  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: theme.colours.secondary
  }
}));

export {
  StyledGrid,
  StyledPaper,
  StyledSelect,
  StyledLabel,
  StyledIcon,
  StyledSwitch
};
