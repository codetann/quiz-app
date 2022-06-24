import { mode } from "@chakra-ui/theme-tools";
import { theme } from "@chakra-ui/react";
import { form_input, form_button } from "./components";

const styles = {
  global: (props: any) => ({
    body: {
      _dark: {
        bg: "alt.900",
      },
    },

    ".form-input": form_input({ mode, props }),
    ".form-button": form_button({ mode, props }),
  }),
};

export { styles };
