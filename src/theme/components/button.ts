import { ButtonProps } from "@chakra-ui/react";
import { StyleConfig } from "@chakra-ui/theme-tools";

interface Props {
  mode: any;
  props: any;
}

const FormButton: StyleConfig = {
  baseStyle: {
    fontSize: "14px",
    height: "3rem",
    rounded: "md",
    outline: "none",
    transition: "all .2s ease-in-out",

    _dark: {
      bg: "_.primary.dark",
    },

    /* button states */
    _disabled: {
      opacity: 0.5,
      "&:hover": {
        opacity: 0.5,
        cursor: "not-allowed",
      },
      "&:active": {
        transform: "none",
      },
    },

    _active: {
      transform: "scale(0.99)",
    },

    _hover: {
      opacity: 0.8,
    },
  },
  variants: {
    ghost: {
      _dark: {
        background: "whiteAlpha.50",
      },
    },
  },
};

export { FormButton };
