// libraries
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colours.backgroundPaper};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.s4} 0;
  box-shadow: ${({ theme }) => theme.shadows.base};
  text-align: center;
`;

const StyledTitle = styled.h4`
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing.s3};
  font-size: ${({ theme }) => theme.fontSize.h4};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.h4};
  letter-spacing: 0.15px;

  &.income {
    color: ${({ theme }) => theme.colours.othersIncome};
  }

  &.expense {
    color: ${({ theme }) => theme.colours.othersOutcome};
  }

  &.savings {
    color: ${({ theme }) => theme.colours.othersSavings};
  }

  &.investment {
    color: ${({ theme }) => theme.colours.othersInvestments};
  }
`;

const StyledText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colours.textTertiary};
  font-size: ${({ theme }) => theme.fontSize.textMedium};
  font-weight: ${({ theme }) => theme.fontWeight.base};
  line-height: ${({ theme }) => theme.lineHeight.h4};
  letter-spacing: 0.25px;
`;

export { StyledCard, StyledTitle, StyledText };
