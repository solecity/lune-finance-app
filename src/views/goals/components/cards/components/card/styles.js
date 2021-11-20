// libraries
import styled from "styled-components";

// external components
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const StyledCard = styled(Card)`
  margin-top: 2px;
`;

const StyledContent = styled(CardContent)`
  padding: 0 !important;
`;

const StyledGrid = styled(Grid)`
  padding: 16px;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 160px;
`;

const StyledName = styled(Typography)`
  margin-bottom: 10px;
`;

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  [`&.${linearProgressClasses.root}`]: {
    borderRadius: "5px",
    height: "6px",
    margin: "15px 0 5px 0"
  },

  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.colours.accent
  },

  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.colours.primary
  }
}));

const StyledButtons = styled(Grid)`
  align-items: center;
  text-align: center;
`;

export {
  StyledCard,
  StyledContent,
  StyledGrid,
  StyledCardMedia,
  StyledName,
  StyledLinearProgress,
  StyledButtons
};
