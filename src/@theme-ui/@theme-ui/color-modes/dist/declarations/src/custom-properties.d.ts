import { ColorMode, ColorModesScale, Theme } from '@theme-ui/css';
export declare const toCustomProperties: (obj: Record<string, any> | undefined, parent?: string | undefined) => Record<string, any>;
/**
 * @internal
 * Recursively transforms an object into CSS variables excluding "modes" key.
 */
export declare const __objectToVars: (parent: string, obj: Record<string, any>) => Record<string, object>;
/**
 * @internal
 * Creates root styles for color modes.
 * - Transforms color scale into CSS variables.
 * - Sets background and text color.
 */
export declare const __createColorStyles: (theme?: Theme) => import("@emotion/serialize").CSSObject;
/**
 * @internal
 * Returns an object with colors turned into Custom CSS Properties and
 * .theme-ui-<colormode> classes used for no-flash serverside rendering.
 */
export declare function __createColorProperties(colors: ColorModesScale, modes: {
    [k: string]: ColorMode;
}): Record<string, object>;
