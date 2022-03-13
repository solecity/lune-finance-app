// libraries
import styled from "styled-components";

// external components
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colours.backgroundPaper};
  box-shadow: ${({ theme }) => theme.shadows.base};
`;

const StyledContent = styled.div`
  margin: ${({ theme }) => theme.spacing.s5} ${({ theme }) => theme.spacing.s7};
`;

const StyledName = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.base};
  font-size: ${({ theme }) => theme.fontSize.textLarge};
  line-height: ${({ theme }) => theme.lineHeight.h4};
  letter-spacing: 0.5px;
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

const StyledButtons = styled.div`
  width: 100%;
  display: inline-flex;
  text-align: center;
`;

export {
  StyledCard,
  StyledContent,
  StyledName,
  StyledLinearProgress,
  StyledButtons
};
