import { ButtonProps } from "@chakra-ui/react";

interface Props {
  mode: any;
  props: any;
}

const form_button = ({ mode, props }: Props): ButtonProps => ({
  /* base styles */
  bg: mode("_.primary.light", "_.primary.dark")(props),
  h: "3rem",
  fontSize: "14px",
  rounded: "md",
  outline: "none",
  transition: "all .1s ease-in-out",

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

export { form_button };
