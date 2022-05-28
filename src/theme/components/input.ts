import { color, ComponentStyleConfig } from "@chakra-ui/react";

const Input: ComponentStyleConfig = {
  baseStyle: {
    background: "orange",
  },
  sizes: {},
  defaultProps: {
    variant: "default",
  },
  variants: {
    default: {
      h: "20rem",
      backgroundColor: "yellow",
    },
  },
};

export { Input };
