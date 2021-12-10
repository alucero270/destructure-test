import "@emotion/react";
import { css } from "@emotion/react";
import { CSSObject } from "@emotion/serialize";
import { default as TwilightTheme } from "./layouts/theme/Theme";

declare module "@emotion/react" {
  export interface Theme extends TwilightTheme {};
  
}
