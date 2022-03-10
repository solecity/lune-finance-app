// libraries
import styled from "styled-components";

// styled components
import { StyledButton } from "styles/default";

// TODO icon button
const StyledIconButton = styled(StyledButton)(({ theme }) => ({
  // [`&.${buttonClasses.root}`]: {
  //   padding: 0,
  //   svg: {
  //     width: "1.1rem"
  //   }
  // }
}));

export { StyledIconButton };
