import type { ColorModesScale, Theme, ThemeStyles } from './types';
/**
 * Constrained identity function used to constrain user's theme type to Theme
 * while preserving its exact type.
 */
export declare const makeTheme: <T extends Theme>(theme: T) => T;
/**
 * Constrained identity function used to create a styles dictionary
 * assignable to ThemeStyles while preserving its exact type.
 */
export declare const makeStyles: <T extends ThemeStyles>(styles: T) => T;
export declare const makeColorsScale: <T extends ColorModesScale>(colors: T) => T;
