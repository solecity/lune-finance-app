// libraries
import styled from "styled-components";

// external components
import SimpleBar from "simplebar-react";

const StyledDrawer = styled.div`
  background-color: ${({ theme }) => theme.colours.primaryDark};
  height: 100vh;
  width: ${({ theme }) => theme.spacing.s14};
  overflow-x: hidden;
  flex-shrink: 0;
  white-space: nowrap;
  color: ${({ theme }) => theme.colours.textAltPrimary};

  &:hover {
    width: ${({ theme }) => theme.spacing.s33};
    transition: width 0.4s cubic-bezier(0.64, 0.11, 0.38, 0.95);

    .divider {
      width: 80%;
    }
  }

  &:not(:hover) {
    transition: width 0.4s cubic-bezier(0.64, 0.11, 0.38, 0.95);
  }
`;

const StyledScroll = styled(SimpleBar)`
  height: 100vh;
`;

const StyledLogo = styled.div`
  width: 50%;
  margin-top: ${({ theme }) => theme.spacing.s6};
  margin-bottom: ${({ theme }) => theme.spacing.s6};
  margin-left: ${({ theme }) => theme.spacing.s7};
  margin-right: 0;

  svg {
    height: auto;
    width: auto;
  }

  @media screen and (max-height: 900px) {
    margin-bottom: ${({ theme }) => theme.spacing.s2};
  }
`;

const StyledMenu = styled.ul`
  height: calc(100vh - 22vh);
  margin: 0;
  padding: ${({ theme }) => theme.spacing.s5} ${({ theme }) => theme.spacing.s6};
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.s20};

  @media screen and (max-height: 900px) {
    gap: 0;
  }
`;

const StyledDivider = styled.hr`
  margin: 0;
`;

const StyledFooter = styled.div`
  width: 100%;
  margin: 0;
  text-align: center;
  line-height: ${({ theme }) => theme.lineHeight.base};

  .copyright {
    min-height: ${({ theme }) => theme.spacing.s6};
    margin-bottom: ${({ theme }) => theme.spacing.s2};
    font-size: ${({ theme }) => theme.fontSize.textMedium};
    letter-spacing: 0.25px;
  }

  .version {
    font-size: ${({ theme }) => theme.fontSize.textSmall};
    letter-spacing: 0.4px;
  }

  @media screen and (max-height: 900px) {
    line-height: ${({ theme }) => theme.lineHeight.small};

    .copyright {
      margin-bottom: 0;
    }
  }
`;

export {
  StyledDrawer,
  StyledScroll,
  StyledLogo,
  StyledMenu,
  StyledDivider,
  StyledFooter
};
