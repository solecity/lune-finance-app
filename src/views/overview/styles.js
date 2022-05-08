// libraries
import styled from "styled-components";

const StyledCharts = styled.div`
  margin-top: ${({ theme }) => theme.spacing.s8};
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  gap: ${({ theme }) => theme.spacing.s6};
`;

export { StyledCharts };
