import styled, { css, DefaultTheme } from "styled-components";

interface Props {
  width?: string;
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  full?: boolean;
}

export const Button = styled.button<Props>`
  background: ${({ theme }) => theme.colors.whiteAlpha[200]};
  height: ${({ theme }) => theme.spacing[12]};
  border: none;
  padding: 0 ${({ theme }) => theme.spacing[5]};
  border-radius: ${({ theme }) => theme.radius.lg};
  color: ${({ theme }) => theme.colors.whiteAlpha[800]};
  width: ${({ width }) => width || "auto"};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.7;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    &:hover {
      transform: none;
      opacity: 0.5;
    }
  }

  ${({ primary }) =>
    primary &&
    css`
      background: ${({ theme }) => theme.colors.purple[500]};
      border: 2px solid ${({ theme }) => theme.colors.purple[500]};
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      background: ${({ theme }) => theme.colors.whiteAlpha[200]};
      border: 2px solid transparent;
    `}

  ${({ outline }) =>
    outline &&
    css`
      background: none;
      border: 2px solid ${({ theme }) => theme.colors.purple[500]};
    `}

  ${({ full }) =>
    full &&
    css`
      width: 100%;
    `};
`;
