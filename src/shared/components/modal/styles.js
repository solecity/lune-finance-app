// libraries
import styled from "styled-components";

// external components
import DialogContent, {
  dialogContentClasses
} from "@mui/material/DialogContent";

const StyledContent = styled(DialogContent)(() => ({
  [`&.${dialogContentClasses.root}`]: {
    minWidth: "350px",
    padding: "0px"
  }
}));

export { StyledContent };
