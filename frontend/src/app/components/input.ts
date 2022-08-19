import styled, { css } from "styled-components";

interface Props {
  width?: string;
  label?: string;
  secondary?: boolean;
  outline?: boolean;
  full?: boolean;
}

export const Input = styled.input<Props>`
  background: ${({ theme }) => theme.colors.whiteAlpha[100]};
  height: ${({ theme }) => theme.spacing[12]};
  border: 2px solid transparent;
  outline: none;
  padding-left: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.lg};
  color: ${({ theme }) => theme.colors.whiteAlpha[800]};
  width: ${({ width }) => width || "auto"};
  cursor: text;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.7;
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.purple[500]};
    background: none;
    opacity: 1;
  }

  ${({ full }) =>
    full &&
    css`
      width: 100%;
    `};

  &::after {
    ${({ label }) =>
      label &&
      css`
        content: "${label}";
        position: absolute;
        height: 3rem;
        width: 3rem;
        font-size: 30px;

        background: red;
        color: red;
        top: 0;
        left: 0;
        z-index: 3;
      `}
  }
`;
