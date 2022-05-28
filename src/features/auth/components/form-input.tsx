import {
  color,
  Input as ChakramInput,
  InputProps,
  useColorMode,
} from "@chakra-ui/react";

const dark: InputProps = {
  bg: "black",
};

const light: InputProps = {
  bg: "white",
};

const styles = {
  dark,
  light,
};

const FormInput = (props: InputProps) => {
  const { colorMode } = useColorMode();
  return <ChakramInput {...props} {...styles[colorMode]} />;
};

export { FormInput };
