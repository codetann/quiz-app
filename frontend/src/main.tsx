import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { GlobalStyle, theme } from "@theme";
import { ThemeProvider } from "styled-components";
import "./theme/stylesheet.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
