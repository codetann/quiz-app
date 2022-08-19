import styled from "styled-components";

interface FormProps {
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

export const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "flex-start"};
  gap: ${({ spacing }) => spacing || 0}rem;
  width: ${({ width }) => width || "100%"};
`;
