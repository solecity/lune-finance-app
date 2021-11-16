// libraries
import styled from "styled-components";

// external components
import TableContainer, {
  tableContainerClasses
} from "@mui/material/TableContainer";

const StyledContainer = styled(TableContainer)(() => ({
  [`&.${tableContainerClasses.root}`]: {
    maxHeight: 550
  }
}));

export { StyledContainer };
