// libraries
import styled from "styled-components";

const StyledCheckbox = styled.label`
  display: inline-flex;
  align-items: center;
  font-family: ${({ theme }) => theme.font.base};
  font-size: ${({ theme }) => theme.fontSize.textMedium};
  line-height: ${({ theme }) => theme.lineHeight.h4};
`;

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colours.backgroundPaper};
  height: ${({ theme }) => theme.spacing.s5};
  width: ${({ theme }) => theme.spacing.s5};
  margin: 0 ${({ theme }) => theme.spacing.s3} 0 0;
  cursor: pointer;
  border: ${({ theme }) => theme.borders.actionActive};
  appearance: none;

  &:checked {
    background-color: ${({ theme }) => theme.colours.secondaryDark};
    border: ${({ theme }) => theme.borders.actionDefault};
  }
`;

export { StyledCheckbox, StyledInput };
