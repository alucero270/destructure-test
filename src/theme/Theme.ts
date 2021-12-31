import { CSSInterpolation } from "@emotion/serialize";

export type Colors =
  | "primary"
  | "secondary"
  | "accent"
  | "accent_1"
  | "text"
  | "background"
  | "navbar"
  | "link"
  | "link_active"
  | "heading"
  | "grey"
  | "placeholder"
  | "color"
  | "borderTopColor"
  | "borderBottomColor"
  | "borderLeftColor"
  | "borderRightColor"
  | "outlineColor"
  | "fill"
  | "stroke"
  | "backgroundColor"
  | "borderColor"
  | "caretColor"
  | "columnRuleColor";

export type Breakpoints = "xs"|"s" | "m" | "l" | "xl";
export type Aliases =
  | "bg"
  | "m"
  | "mt"
  | "mr"
  | "mb"
  | "ml"
  | "mx"
  | "my"
  | "p"
  | "pt"
  | "pr"
  | "pb"
  | "pl"
  | "px"
  | "py";
export type Space =
  | "margin"
  | "marginTop"
  | "marginRight"
  | "marginBottom"
  | "marginLeft"
  | "marginX"
  | "marginY"
  | "padding"
  | "paddingTop"
  | "paddingRight"
  | "paddingBottom"
  | "paddingLeft"
  | "paddingX"
  | "paddingY"
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "gridGap"
  | "gridColumnGap"
  | "gridRowGap"
  | "gap"
  | "columnGap"
  | "rowGap";

export type Sizes =
  | "width"
  | "minWidth"
  | "maxWidth"
  | "height"
  | "minHeight"
  | "maxHeight"
  | "flexBasis"
  | "Box"
  | "navbarHeight"
  | "size";

export type Multiples =
  | "marginX"
  | "marginY"
  | "paddingX"
  | "paddingY"
  | "size";

export type Borders =
  | "border"
  | "borderTop"
  | "borderRight"
  | "borderBottom"
  | "borderLeft"
  | "borderWidth"
  | "borderStyle"
  | "borderRadius"
  | "borderTopRightRadius"
  | "borderTopLeftRadius"
  | "borderBottomRightRadius"
  | "borderBottomLeftRadius"
  | "borderTopWidth"
  | "borderTopStyle"
  | "borderBottomWidth"
  | "borderBottomStyle"
  | "borderLeftWidth"
  | "borderLeftStyle"
  | "borderRightWidth"
  | "borderRightStyle";

export type Fonts =
  | "body"
  | "heading"
  | "fontFamily"
  | "fontSize"
  | "fontWeight"
  | "lineHeight"
  | "letterSpacing";

export type Padding = "default" | "dense";

export type Shadows = "boxShadow" | "textShadow";

export type StyledElements = "a";

export type FormVariants = "input" | "jumbo-input";

export type ButtonVariants = "primary" | "jumbo" | "outline" | "accent";

export type TextVariants =
  | "copy"
  | "heading"
  | "accent"
  | "subheading"
  | "metric";


interface Variants {
  text: Record<TextVariants, CSSInterpolation>;
  forms: Record<FormVariants, CSSInterpolation>;
  buttons: Record<ButtonVariants, CSSInterpolation>;
  breakpoints: Record<Breakpoints, CSSInterpolation>;
}

interface Theme extends Variants {
  aliases: Record<Aliases, string>;
  colors: Record<Colors, string | undefined>;
  shadows: Record<Shadows, number | string | undefined>;
  borders: Record<Borders, undefined | string>;
  fonts: Record<Fonts, string>;
  sizes: Record<Sizes, string | number>;
  padding: Record<Padding, string | number>;
  space: Record<Space, string | number>;
  styles: Record<StyledElements, CSSInterpolation>;
  multiples: Record<Multiples, string[]>;
}

export default Theme;
