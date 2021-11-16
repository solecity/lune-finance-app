// libraries
import styled from "styled-components";

const StyledCard = styled.div(({ colour }) => ({
  backgroundColor: colour,
  height: "20px",
  width: "20px",
  margin: "auto",
  borderRadius: "50px",
  boxShadow: "none"
}));

export { StyledCard };
