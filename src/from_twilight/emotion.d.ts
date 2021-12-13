import "@emotion/react";
import { css } from "@emotion/react";
import { CSSObject } from "@emotion/serialize";
import { StyledComponent } from "@emotion/styled";
import { default as TwilightTheme } from "./Theme";
export type { CSSObject } from "@emotion/react";
/* 

All blocks are imported from Theme ui. 
Move to new file if necessary. 
Any additions that are not imports please annotate with comment blocks. 

*/
declare type StandardCSSProperties = CSS.Properties<number | string>;

export declare type Scale<T> = T[] | ScaleDict<T>;

export interface CSSProperties
  extends CSS.StandardProperties<number | string>,
    CSS.SvgProperties<number | string>,
    CSS.VendorProperties<number | string> {}

export declare type CSSPseudoSelectorProps = {
  [K in CSS.Pseudos]?: StyledComponent;
};

interface OverwriteCSSProperties {
  /**
   * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the
   * element, blur and spread radii, and color.
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  |  **4**  | **5.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  boxShadow?: CSS.Property.BoxShadow | number;
  /**
   * The **`font-weight`** CSS property specifies the weight (or boldness) of the font. The font weights available to you will depend on the `font-family` you are using. Some fonts are only
   * available in `normal` and `bold`.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **2**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  fontWeight?: CSS.Property.FontWeight | string;
  /**
   * The **`border-top-style`** CSS property sets the line style of an element's top `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  borderTopStyle?: CSS.Property.BorderTopStyle | string;
  /**
   * The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  borderBottomStyle?: CSS.Property.BorderBottomStyle | string;
  /**
   * The **`border-right-style`** CSS property sets the line style of an element's right `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  borderRightStyle?: CSS.Property.BorderRightStyle | string;
  /**
   * The **`border-left-style`** CSS property sets the line style of an element's left `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  borderLeftStyle?: CSS.Property.BorderLeftStyle | string;
  /**
   * The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  borderRadius?: CSS.Property.BorderRadius<string | number>;
  /**
   * The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  zIndex?: CSS.Property.ZIndex | string;
}

export interface VariantProperty {
  /**
   * **`Variants`** can be useful for applying complex styles to a component based on a single prop.
   *
   * @example
   * const theme = {
   *   buttons: {
   *     primary: {
   *       p: 3,
   *       fontWeight: 'bold',
   *       color: 'white',
   *       bg: 'primary',
   *       borderRadius: 2,
   *     },
   *   },
   * }
   * const result = css({
   *   variant: 'buttons.primary',
   * })(theme)
   *
   * @see https://styled-system.com/variants
   */
  variant?: string;
}
export interface Label {
  /**
   * String appended to generated class name.
   * @see https://emotion.sh/docs/labels
   *
   * You can style HTML <label> elements with `"& label": {}`.
   */
  label?: string;
}

export interface ObjectWithDefault<T> {
  /**
   * Default value in nested scale.
   *
   * Given theme
   * ```
   * {
   *   colors: {
   *     primary: { __default: '#00f', light: '#33f' }
   *   }
   * }
   * ```
   * `sx={{ color: 'primary' }}` resolves to `color: #00f`.
   */
  __default?: T;
}

export declare type Scale<T> = T[] | ScaleDict<T>;

export interface ThemeDerivedStyles {
  (theme: Theme): ThemeUICSSObject;
}

declare module "@emotion/react" {
  export interface Theme extends TwilightTheme {
    //Entire block are additions from theme-ui. Move to new file if necessary.
    breakpoints?: Array<string>;
    mediaQueries?: {
      [size: string]: string;
    };
    space?: Scale<CSS.Property.Margin<number | string>>;
    fontSizes?: Scale<CSS.Property.FontSize<number>>;
    fonts?: Scale<CSS.Property.FontFamily>;
    fontWeights?: Scale<CSS.Property.FontWeight>;
    //lineHeights?: Scale<CSS.Property.LineHeight<TLengthStyledSystem>>;
    //letterSpacings?: Scale<CSS.Property.LetterSpacing<TLengthStyledSystem>>;
    sizes?: Scale<CSS.Property.Height<{}> | CSS.Property.Width<{}>>;
    borders?: Scale<CSS.Property.Border<{}>>;
    borderStyles?: Scale<CSS.Property.Border<{}>>;
    //borderWidths?: Scale<CSS.Property.BorderWidth<TLengthStyledSystem>>;
    //radii?: Scale<CSS.Property.BorderRadius<TLengthStyledSystem>>;
    shadows?: Scale<CSS.Property.BoxShadow>;
    zIndices?: Scale<CSS.Property.ZIndex>;
    //colorStyles?: Scale<ThemeUICSSProperties>;
    //textStyles?: Scale<ThemeUICSSProperties>;
    opacities?: Scale<CSS.Property.Opacity>;
    transitions?: Scale<CSS.Property.Transition>;
    /**
     * Define the colors that are available through this theme
     */
    colors?: ColorModesScale;
    /**
     * Colors are transformed into CSS custom properties.
     *
     * If you need to read their raw values to pass them somewhere where CSS
     * custom properties are not supported, use `rawColors`.
     *
     * Additionally, you can access all the color modes in this objects.
     */
    rawColors?: ColorModesScale;
    /**
     * Styles for elements rendered in MDX can be added to the theme.styles
     * object. This is the primary, low-level way to control typographic and
     * other styles in markdown content. Styles within this object are processed
     * with @styled-system/css and have access to base theme values like colors,
     * fonts, etc.
     */
    /**
     * Styles for elements rendered in MDX can be added to the theme.styles
     * object. This is the primary, low-level way to control typographic and
     * other styles in markdown content. Styles within this object are processed
     * with @styled-system/css and have access to base theme values like colors,
     * fonts, etc.
     */
    styles?: ThemeStyles;
    /**
     * You can define additional CSS grid layouts by adding variants to the
     * `theme.grids` object. These styles can be used to create a wide variety of
     * different reusable layouts.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/grid#variants
     */
    grids?: Record<string, StyledComponent>;
    /**
     * Button variants can be defined in the `theme.buttons` object. The `Button`
     * component uses `theme.buttons.primary` as its default variant style.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/button#variants
     */
    buttons?: Record<string, StyledComponent>;
    /**
     * Text style variants can be defined in the `theme.text` object. The `Text`
     * component uses `theme.text.default` as its default variant style.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/text#variants
     */
    text?: Record<string, StyledComponent>;
    /**
     * Link variants can be defined in the `theme.links` object. By default the
     * `Link` component will use styles defined in `theme.styles.a`.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/link#variants
     */
    links?: Record<string, StyledComponent>;
    /**
     * Image style variants can be defined in the `theme.images` object.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/image#variants
     */
    images?: Record<string, StyledComponent>;
    /**
     * Card style variants can be defined in `the theme.cards` object. By default
     * the `Card` component uses the `theme.cards.primary` variant.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/card#variants
     */
    cards?: Record<string, StyledComponent>;
    /**
     * Container variants can be defined in the `theme.layout` object. The
     * `Container` component uses `theme.layout.container` as its default variant
     * style.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/container#variants
     */
    layout?: Record<string, StyledComponent>;
    /**
     * Label variants can be defined in `theme.forms` and the component uses the
     * `theme.forms.label` variant by default.
     *
     * Input variants can be defined in `theme.forms` and the component uses the
     * `theme.forms.input` variant by default.
     *
     * Select variants can be defined in `theme.forms` and the component uses the
     * `theme.forms.select` variant by default.
     *
     * Textarea variants can be defined in `theme.forms` and the component uses
     * the `theme.forms.textarea` variant by default.
     *
     * Radio variants can be defined in `theme.forms` and the component uses the
     * `theme.forms.radio` variant by default.
     *
     * Checkbox variants can be defined in `theme.forms` and the component uses
     * the `theme.forms.checkbox` variant by default.
     *
     * Slider variants can be defined in the `theme.forms` object. The `Slider`
     * component uses `theme.forms.slider` as its default variant style.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/label#variants
     * @see https://theme-ui.com/components/input#variants
     * @see https://theme-ui.com/components/select#variants
     * @see https://theme-ui.com/components/textarea#variants
     * @see https://theme-ui.com/components/radio#variants
     * @see https://theme-ui.com/components/checkbox#variants
     * @see https://theme-ui.com/components/slider#variants
     */
    forms?: Record<string, StyledComponent>;
    /**
     * Badge variants can be defined in `theme.badges`. The `Badge` component uses
     * `theme.badges.primary` as its default variant.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/badge#variants
     */
    badges?: Record<string, StyledComponent>;
    /**
     * Alert variants can be defined in `theme.alerts`. The `Alert` component uses
     * `theme.alerts.primary` as its default variant.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/alert#variants
     */
    alerts?: Record<string, StyledComponent>;
    /**
     * Message variants can be defined in the `theme.messages` object.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/message#variants
     */
    messages?: Record<string, StyledComponent>;
  }
}

