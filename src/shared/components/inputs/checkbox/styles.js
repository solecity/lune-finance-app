// libraries
import styled from "styled-components";

const StyledCheckbox = styled.label`
  display: inline-flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: ${({ theme }) => theme.font.textMedium};
  line-height: ${({ theme }) => theme.lineHeight.h4};
`;

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colours.backgroundPaper};
  height: ${({ theme }) => theme.spacing.s5};
  width: ${({ theme }) => theme.spacing.s5};
  margin: 0 ${({ theme }) => theme.spacing.s3} 0 0;
  cursor: pointer;
  border: 1.5px solid ${({ theme }) => theme.colours.actionActive};
  appearance: none;

  &:checked {
    background-color: ${({ theme }) => theme.colours.secondaryDark};
    border: 1.5px solid ${({ theme }) => theme.colours.actionBorder};
  }
`;

export { StyledCheckbox, StyledInput };
