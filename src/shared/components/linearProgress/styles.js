// libraries
import styled from "styled-components";

// external components
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  [`.${linearProgressClasses.root}`]: {
    backgroundColor: `${theme.colours.secondary} !important`
  },

  [`.${linearProgressClasses.bar}`]: {
    backgroundColor: `${theme.colours.primary} !important`
  }
}));

export { StyledLinearProgress };
