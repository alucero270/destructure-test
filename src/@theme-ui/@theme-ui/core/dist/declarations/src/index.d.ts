import { Theme } from '@theme-ui/css';
import * as React from 'react';
import { ThemeUIJSX } from './jsx-namespace';
export type { ThemeUIJSX } from './jsx-namespace';
export type { CSSObject, CSSOthersObject, CSSProperties, CSSPseudoSelectorProps, ColorMode, ColorModesScale, Label, ResponsiveStyleValue, Scale, StylePropertyValue, TLengthStyledSystem, Theme, ThemeDerivedStyles, ThemeStyles, ThemeUICSSObject, ThemeUICSSProperties, ThemeUIExtendedCSSProperties, ThemeUIStyleObject, VariantProperty, } from '@theme-ui/css';
export * from './types';
export declare const jsx: typeof React.createElement;
/**
 * @internal for Babel JSX pragma
 * @see https://github.com/system-ui/theme-ui/issues/1603
 */
export declare const createElement: unknown;
export declare namespace jsx {
    namespace JSX {
        interface Element extends ThemeUIJSX.Element {
        }
        interface ElementClass extends ThemeUIJSX.ElementClass {
        }
        interface ElementAttributesProperty extends ThemeUIJSX.ElementAttributesProperty {
        }
        interface ElementChildrenAttribute extends ThemeUIJSX.ElementChildrenAttribute {
        }
        type LibraryManagedAttributes<C, P> = ThemeUIJSX.LibraryManagedAttributes<C, P>;
        interface IntrinsicAttributes extends ThemeUIJSX.IntrinsicAttributes {
        }
        interface IntrinsicClassAttributes<T> extends ThemeUIJSX.IntrinsicClassAttributes<T> {
        }
        type IntrinsicElements = ThemeUIJSX.IntrinsicElements;
    }
}
export interface ThemeUIContextValue {
    __EMOTION_VERSION__: string;
    theme: Theme;
}
/**
 * @internal
 */
export declare const __themeUiDefaultContextValue: ThemeUIContextValue;
/**
 * @internal
 */
export declare const __ThemeUIContext: React.Context<ThemeUIContextValue>;
export declare const useThemeUI: () => ThemeUIContextValue;
/**
 * Deeply merge themes
 */
export declare const merge: {
    (a: Theme, b: Theme): Theme;
    all: typeof mergeAll;
};
declare function mergeAll<A, B>(a: A, B: B): A & B;
declare function mergeAll<A, B, C>(a: A, B: B, c: C): A & B & C;
declare function mergeAll<A, B, C, D>(a: A, B: B, c: C, d: D): A & B & C & D;
export interface __ThemeUIInternalBaseThemeProviderProps {
    context: ThemeUIContextValue;
    children: React.ReactNode;
}
/**
 * @internal
 */
export declare const __ThemeUIInternalBaseThemeProvider: ({ context, children, }: __ThemeUIInternalBaseThemeProviderProps) => React.FunctionComponentElement<React.ProviderProps<object>>;
export interface ThemeProviderProps {
    theme: Theme | ((outerTheme: Theme) => Theme);
    children?: React.ReactNode;
}
export declare function ThemeProvider({ theme, children }: ThemeProviderProps): React.FunctionComponentElement<{
    context: {
        theme: Theme;
        __EMOTION_VERSION__: string;
        colorMode?: string | undefined;
        setColorMode?: ((colorMode: React.SetStateAction<string | undefined>) => void) | undefined;
    };
    children: React.ReactNode;
}>;