import styled, { css } from "styled-components";

interface Props {
  type: "success" | "error";
}

export const Toast = styled.div<Props>`
  width: 20rem;
  height: 5rem;
  position: fixed;
  top: 0;
  right: 0;
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};

  ${({ type }) =>
    type === "success" &&
    css`
      background: ${({ theme }) => theme.colors.green[500]};
    `}

  ${({ type }) =>
    type === "error" &&
    css`
      background: ${({ theme }) => theme.colors.red[500]};
    `}
`;
