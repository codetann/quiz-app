import styled, { css } from "styled-components";
import { theme } from "@theme";

interface StackProps {
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  align?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  spacing?: number;
  width?: string;
}

export const HStack = styled.div<StackProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "flex-start"};
  gap: ${({ spacing }) => spacing || 0}rem;
  width: ${({ width }) => width || "auto"};
`;

export const VStack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "flex-start"};
  gap: ${({ spacing }) => spacing || 0}rem;
  width: ${({ width }) => width || "100%"};
`;
