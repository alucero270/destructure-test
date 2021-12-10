import {} from "@emotion/serialize";
import { CSSInterpolation /* Interpolation */ } from "@emotion/serialize";
//import Link from "../themeComponents/Link";
//import { GatsbyLinkProps } from "gatsby-link";
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
  | "placeholder";




//export { Link } from "../themeComponents/Link";

export { Flex } from "../themeComponents/Flex";

export { Box } from "../themeComponents/Box";

export type Fonts = "body" | "heading";

export type Sizes = "Box" | "navbarHeight";

export type Padding = "default" | "dense";

export type StyledElements = "a";

export type FormVariants = "input" | "jumbo-input";

export type ButtonVariants = "primary" | "jumbo" | "outline" | "accent";

export type TextVariants =
  | "copy"
  | "heading"
  | "accent"
  | "subheading"
  | "metric";

//export type Interpolation<Props> = InterpolationPrimitive | ArrayInterpolation<Props> | FunctionInterpolation<Props>

/* 
//adds interface for GatsbyLink 
interface CustomGatsbyLinkProps
  extends Omit<GatsbyLinkProps<Record<string, unknown>>, "ref"> {
  active?: boolean;
} */

interface Variants {
  text: Record<TextVariants, CSSInterpolation>;
  forms: Record<FormVariants, CSSInterpolation>;
  buttons: Record<ButtonVariants, CSSInterpolation>;
}

interface Theme extends Variants {
  colors: Record<Colors, string>;
  fonts: Record<Fonts, string>;
  sizes: Record<Sizes, string | number>;
  padding: Record<Padding, string | number>;
  styles: Record<StyledElements, CSSInterpolation>;
}

export default Theme;
