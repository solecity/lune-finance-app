// libraries
import styled from "styled-components";

// external components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// custom components
import {
  InputTextField,
  InputSelect,
  InputDatePicker
} from "shared/components";

const StyledContainer = styled(Container)`
  padding: 25px;
`;

const StyledInputTextField = styled(InputTextField)`
  margin-bottom: 35px !important;
`;

const StyledInputSelect = styled(InputSelect)`
  margin-bottom: 35px !important;
`;

const StyledInputDatePicker = styled(InputDatePicker)`
  margin-bottom: 35px !important;
`;

const StyledCheckbox = styled(Grid)`
  margin: -30px 0 10px 0 !important;
`;

export {
  StyledContainer,
  StyledInputTextField,
  StyledInputSelect,
  StyledInputDatePicker,
  StyledCheckbox
};
