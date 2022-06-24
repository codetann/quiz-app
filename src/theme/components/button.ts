import { ButtonProps } from "@chakra-ui/react";
import { StyleConfig } from "@chakra-ui/theme-tools";

interface Props {
  mode: any;
  props: any;
}

const FormButton: StyleConfig = {
  baseStyle: {
    fontSize: "14px",
    rounded: "md",
    outline: "none",
    transition: "all .1s ease-in-out",

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
};

const form_button = ({ mode, props }: Props): ButtonProps => ({
  /* base styles */
  bg: mode("_.primary.light", "_.primary.dark")(props),
  h: "3rem",

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
});

export { form_button, FormButton };
