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

    .divider {
      width: 60%;
    }
  }
`;

const StyledScroll = styled(SimpleBar)`
  height: 100vh;
`;

const StyledLogo = styled.div`
  width: 50%;
  margin: ${({ theme }) => theme.spacing.s6};
  margin-right: 0;

  &.icon {
    margin-left: ${({ theme }) => theme.spacing.s7};
  }
`;

const StyledNavBar = styled.div`
  display: block;
`;

const StyledMenu = styled.ul`
  height: calc(100vh - 18vh);
  padding: ${({ theme }) => theme.spacing.s5} ${({ theme }) => theme.spacing.s6};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledFooter = styled.div`
  width: 100%;
  margin: 0;
`;

const StyledText = styled.div`
  margin: 0;
  text-align: center;
  line-height: ${({ theme }) => theme.lineHeight.base};

  .copyright {
    margin-bottom: ${({ theme }) => theme.spacing.s2};
    font-size: ${({ theme }) => theme.font.textMedium};
    letter-spacing: 0.25px;
  }

  .version {
    font-size: ${({ theme }) => theme.font.textSmall};
    letter-spacing: 0.4px;
  }
`;

export {
  StyledDrawer,
  StyledScroll,
  StyledLogo,
  StyledNavBar,
  StyledMenu,
  StyledFooter,
  StyledText
};
