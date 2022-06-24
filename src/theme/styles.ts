import { mode } from "@chakra-ui/theme-tools";
import { theme } from "@chakra-ui/react";
import { form_input } from "./components";

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("_.bg.light", "_.bg.dark")(props),
    },
    /* custom component styling */
    ".form-input": form_input({ mode, props }),
  }),
};

export { styles };
