import { mode } from "@chakra-ui/theme-tools";
import { theme } from "@chakra-ui/react";
import { form_input, form_button } from "./components";

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("_.bg.light", "_.bg.dark")(props),
    },
    /* custom component styling */
    ".form-input": form_input({ mode, props }),
    ".form-button": form_button({ mode, props }),
  }),
};

export { styles };
