// libraries
import styled from "styled-components";

// external components
import TableContainer, {
  tableContainerClasses
} from "@mui/material/TableContainer";
import TableCell from "@mui/material/TableCell";
import SimpleBar from "simplebar-react";

const StyledContainer = styled(TableContainer)(() => ({
  [`&.${tableContainerClasses.root}`]: {
    //maxHeight: "calc(100vh - 12rem)",
  }
}));

const StyledHeadCell = styled(TableCell)(({ theme, width }) => ({
  backgroundColor: `${theme.colours.secondary} !important`,
  minWidth: width,
  color: `${theme.colours.white} !important`
}));

const StyledBodyCell = styled(TableCell)(({ theme, width }) => ({
  backgroundColor: `${theme.colours.inputBackground} !important`
}));

const StyledScroll = styled(SimpleBar)`
  width: 100%;

  .simplebar-scrollbar::before {
    background-color: ${({ theme }) => theme.colours.primary};
  }
`;

export { StyledContainer, StyledHeadCell, StyledBodyCell, StyledScroll };
