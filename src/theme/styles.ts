import { mode } from "@chakra-ui/theme-tools";
import { theme } from "@chakra-ui/react";
import { form_input } from "./components";

const styles = {
  global: (props: any) => ({
    body: {
      _dark: {
        bg: "alt.900",
      },
    },
    /* custom component styling */
    ".form-input": form_input({ mode, props }),
  }),
};

export { styles };
