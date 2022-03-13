// libraries
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colours.backgroundPaper};
  box-shadow: ${({ theme }) => theme.shadows.base};
`;

const StyledColour = styled.div(({ theme, colour }) => ({
  backgroundColor: `${colour} !important`,
  height: `${theme.spacing.s2}`
}));

const StyledContent = styled.div`
  margin: ${({ theme }) => theme.spacing.s5} ${({ theme }) => theme.spacing.s7};
`;

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-bottom: ${({ theme }) => theme.spacing.sZ};
`;

const StyledTitle = styled.div`
  display: inline-flex;
  align-items: center;
`;

const StyledName = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.base};
  font-size: ${({ theme }) => theme.fontSize.textMedium};
  line-height: ${({ theme }) => theme.lineHeight.h4};
  letter-spacing: 0.25px;
`;

const StyledCardIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.s3};

  svg {
    height: ${({ theme }) => theme.spacing.s6};
    width: ${({ theme }) => theme.spacing.s6};
  }
`;

const StyledAmount = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.textSmall};
  line-height: ${({ theme }) => theme.lineHeight.small};
  letter-spacing: 0.25px;
`;

const StyledValue = styled.p`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.textSmall};
  line-height: ${({ theme }) => theme.lineHeight.small};
  letter-spacing: -0.15px;
`;

const StyledDetails = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.textSmall};
  line-height: ${({ theme }) => theme.lineHeight.small};
  letter-spacing: -0.15px;
`;

const StyledText = styled.p`
  margin: 0;

  &:first-child {
    margin-bottom: ${({ theme }) => theme.spacing.s1};
  }
`;

const StyledButtons = styled.div`
  width: 100%;
  display: inline-flex;
  text-align: center;
`;

export {
  StyledCard,
  StyledColour,
  StyledHeader,
  StyledTitle,
  StyledName,
  StyledContent,
  StyledCardIcon,
  StyledAmount,
  StyledValue,
  StyledDetails,
  StyledText,
  StyledButtons
};
