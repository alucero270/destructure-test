import type { CSSObject, ThemeUIStyleObject, Theme } from './types';
export * from './types';
/**
 * Allows for nested scales with shorthand values
 * @example
 * {
 *   colors: {
 *     primary: { __default: '#00f', light: '#33f' }
 *   }
 * }
 * css({ color: 'primary' }); // { color: '#00f' }
 * css({ color: 'primary.light' }) // { color: '#33f' }
 */
export declare const THEME_UI_DEFAULT_KEY = "__default";
/**
 * Extracts value under path from a deeply nested object.
 * Used for Themes, variants and Theme UI style objects.
 * Given a path to object with `__default` key, returns the value under that key.
 *
 * @param obj a theme, variant or style object
 * @param path path separated with dots (`.`)
 * @param fallback default value returned if get(obj, path) is not found
 */
export declare function get(obj: object, path: string | number | undefined, fallback?: unknown, p?: number, undef?: unknown): any;
export declare const getObjectWithVariants: (obj: any, theme: Theme) => CSSObject;
export declare const defaultBreakpoints: string[];
export declare const multiples: {
    marginX: string[];
    marginY: string[];
    paddingX: string[];
    paddingY: string[];
    scrollMarginX: string[];
    scrollMarginY: string[];
    scrollPaddingX: string[];
    scrollPaddingY: string[];
    size: string[];
};
export declare const scales: {
    readonly color: "colors";
    readonly backgroundColor: "colors";
    readonly borderColor: "colors";
    readonly caretColor: "colors";
    readonly columnRuleColor: "colors";
    readonly textDecorationColor: "colors";
    readonly opacity: "opacities";
    readonly transition: "transitions";
    readonly margin: "space";
    readonly marginTop: "space";
    readonly marginRight: "space";
    readonly marginBottom: "space";
    readonly marginLeft: "space";
    readonly marginX: "space";
    readonly marginY: "space";
    readonly marginBlock: "space";
    readonly marginBlockEnd: "space";
    readonly marginBlockStart: "space";
    readonly marginInline: "space";
    readonly marginInlineEnd: "space";
    readonly marginInlineStart: "space";
    readonly padding: "space";
    readonly paddingTop: "space";
    readonly paddingRight: "space";
    readonly paddingBottom: "space";
    readonly paddingLeft: "space";
    readonly paddingX: "space";
    readonly paddingY: "space";
    readonly paddingBlock: "space";
    readonly paddingBlockEnd: "space";
    readonly paddingBlockStart: "space";
    readonly paddingInline: "space";
    readonly paddingInlineEnd: "space";
    readonly paddingInlineStart: "space";
    readonly scrollMargin: "space";
    readonly scrollMarginTop: "space";
    readonly scrollMarginRight: "space";
    readonly scrollMarginBottom: "space";
    readonly scrollMarginLeft: "space";
    readonly scrollMarginX: "space";
    readonly scrollMarginY: "space";
    readonly scrollPadding: "space";
    readonly scrollPaddingTop: "space";
    readonly scrollPaddingRight: "space";
    readonly scrollPaddingBottom: "space";
    readonly scrollPaddingLeft: "space";
    readonly scrollPaddingX: "space";
    readonly scrollPaddingY: "space";
    readonly inset: "space";
    readonly insetBlock: "space";
    readonly insetBlockEnd: "space";
    readonly insetBlockStart: "space";
    readonly insetInline: "space";
    readonly insetInlineEnd: "space";
    readonly insetInlineStart: "space";
    readonly top: "space";
    readonly right: "space";
    readonly bottom: "space";
    readonly left: "space";
    readonly gridGap: "space";
    readonly gridColumnGap: "space";
    readonly gridRowGap: "space";
    readonly gap: "space";
    readonly columnGap: "space";
    readonly rowGap: "space";
    readonly fontFamily: "fonts";
    readonly fontSize: "fontSizes";
    readonly fontWeight: "fontWeights";
    readonly lineHeight: "lineHeights";
    readonly letterSpacing: "letterSpacings";
    readonly border: "borders";
    readonly borderTop: "borders";
    readonly borderRight: "borders";
    readonly borderBottom: "borders";
    readonly borderLeft: "borders";
    readonly borderWidth: "borderWidths";
    readonly borderStyle: "borderStyles";
    readonly borderRadius: "radii";
    readonly borderTopRightRadius: "radii";
    readonly borderTopLeftRadius: "radii";
    readonly borderBottomRightRadius: "radii";
    readonly borderBottomLeftRadius: "radii";
    readonly borderTopWidth: "borderWidths";
    readonly borderTopColor: "colors";
    readonly borderTopStyle: "borderStyles";
    readonly borderBottomWidth: "borderWidths";
    readonly borderBottomColor: "colors";
    readonly borderBottomStyle: "borderStyles";
    readonly borderLeftWidth: "borderWidths";
    readonly borderLeftColor: "colors";
    readonly borderLeftStyle: "borderStyles";
    readonly borderRightWidth: "borderWidths";
    readonly borderRightColor: "colors";
    readonly borderRightStyle: "borderStyles";
    readonly borderBlock: "borders";
    readonly borderBlockColor: "colors";
    readonly borderBlockEnd: "borders";
    readonly borderBlockEndColor: "colors";
    readonly borderBlockEndStyle: "borderStyles";
    readonly borderBlockEndWidth: "borderWidths";
    readonly borderBlockStart: "borders";
    readonly borderBlockStartColor: "colors";
    readonly borderBlockStartStyle: "borderStyles";
    readonly borderBlockStartWidth: "borderWidths";
    readonly borderBlockStyle: "borderStyles";
    readonly borderBlockWidth: "borderWidths";
    readonly borderEndEndRadius: "radii";
    readonly borderEndStartRadius: "radii";
    readonly borderInline: "borders";
    readonly borderInlineColor: "colors";
    readonly borderInlineEnd: "borders";
    readonly borderInlineEndColor: "colors";
    readonly borderInlineEndStyle: "borderStyles";
    readonly borderInlineEndWidth: "borderWidths";
    readonly borderInlineStart: "borders";
    readonly borderInlineStartColor: "colors";
    readonly borderInlineStartStyle: "borderStyles";
    readonly borderInlineStartWidth: "borderWidths";
    readonly borderInlineStyle: "borderStyles";
    readonly borderInlineWidth: "borderWidths";
    readonly borderStartEndRadius: "radii";
    readonly borderStartStartRadius: "radii";
    readonly columnRuleWidth: "borderWidths";
    readonly outlineColor: "colors";
    readonly boxShadow: "shadows";
    readonly textShadow: "shadows";
    readonly zIndex: "zIndices";
    readonly width: "sizes";
    readonly minWidth: "sizes";
    readonly maxWidth: "sizes";
    readonly height: "sizes";
    readonly minHeight: "sizes";
    readonly maxHeight: "sizes";
    readonly flexBasis: "sizes";
    readonly size: "sizes";
    readonly blockSize: "sizes";
    readonly inlineSize: "sizes";
    readonly maxBlockSize: "sizes";
    readonly maxInlineSize: "sizes";
    readonly minBlockSize: "sizes";
    readonly minInlineSize: "sizes";
    readonly columnWidth: "sizes";
    readonly fill: "colors";
    readonly stroke: "colors";
};
declare type CssPropsArgument = {
    theme: Theme;
} | Theme;
export declare const css: (args?: ThemeUIStyleObject) => (props?: CssPropsArgument) => CSSObject;
