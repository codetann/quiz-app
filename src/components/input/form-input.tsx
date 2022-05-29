import {
  chakra,
  Input,
  InputProps,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useColorTheme } from "@hooks";

interface ThemeStyles {
  light: InputProps;
  dark: InputProps;
}

const FormInput = (props: InputProps) => {
  return <chakra.input className="form-input" {...(props as any)} />;
};

export { FormInput };
