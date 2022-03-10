// libraries
import styled from "styled-components";

const StyledCharts = styled.div`
  margin-top: ${({ theme }) => theme.spacing.s8};
  display: grid;
  grid-template-columns: 3.15fr 1fr;
  gap: ${({ theme }) => theme.spacing.s8};
`;

export { StyledCharts };
