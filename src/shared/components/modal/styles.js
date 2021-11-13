// libraries
import styled from "styled-components";

// external components
import DialogContent, {
  dialogContentClasses
} from "@mui/material/DialogContent";

const StyledContent = styled(DialogContent)(() => ({
  [`&.${dialogContentClasses.root}`]: {
    padding: "0px"
  }
}));

export { StyledContent };
