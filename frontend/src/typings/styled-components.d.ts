import "styled-components";
import { theme } from "@theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof theme.colors;
    borders: typeof theme.borders;
    breakpoints: typeof theme.breakpoints;
    radius: typeof theme.radius;
    shadows: typeof theme.shadows;
    typography: typeof theme.typography;
    spacing: typeof theme.spacing;
    transition: typeof theme.transition;
  }
}
