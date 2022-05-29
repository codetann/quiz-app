import { useColorMode } from "@chakra-ui/react";

const useColorTheme = () => {
  const { colorMode } = useColorMode();

  const theme = (lightValue: any, darkValue: any) => {
    return colorMode === "light" ? lightValue : darkValue;
  };

  return theme;
};

export { useColorTheme };
