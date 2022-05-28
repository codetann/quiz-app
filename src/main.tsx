import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "@theme";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/poppins/400.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider resetCSS theme={theme}>
    <App />
  </ChakraProvider>
);
