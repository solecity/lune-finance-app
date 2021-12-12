// libraries
import styled from "styled-components";

// external components
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const StyledContent = styled(CardContent)`
  padding: 0 !important;
`;

const StyledGrid = styled(Grid)`
  padding: 16px;
`;

const StyledName = styled(Typography)`
  margin-bottom: 10px;
`;

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  margin: "15px 0 5px 0",
  borderRadius: "5px",

  [`&.${linearProgressClasses.root}`]: {
    height: "6px",
    backgroundColor: theme.colours.secondary
  },

  [`.${linearProgressClasses.bar}`]: {
    borderRadius: "5px",
    backgroundColor: theme.colours.primary
  },

  "&.payed": {
    [`.${linearProgressClasses.bar}`]: {
      backgroundColor: `${theme.colours.green} !important`
    }
  }
}));

const StyledButtons = styled(Grid)`
  align-items: center;
  text-align: center;
`;

export {
  StyledContent,
  StyledGrid,
  StyledName,
  StyledLinearProgress,
  StyledButtons
};
