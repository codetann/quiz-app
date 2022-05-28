import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("_.bg.light", "_.bg.dark")(props),
    },
    "input-css": {
      bg: "black",
      h: "20rem",
    },
  }),
};

export { styles };
