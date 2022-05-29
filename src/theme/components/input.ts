import { InputProps } from "@chakra-ui/react";

interface FormInputProps {
  mode: any;
  props: any;
}

const form_input = ({ mode, props }: FormInputProps): InputProps => ({
  bg: mode("blackAlpha.100", "whiteAlpha.100")(props),
  h: "2.5rem",
  rounded: "md",
  pl: "1rem",
  outline: "none",
  transition: "all .2s ease-in-out",

  _focus: {
    outlineColor: mode("blackAlpha.200", "_.primary.dark")(props),
  },

  _hover: {
    opacity: 0.8,
  },
});

export { form_input };
