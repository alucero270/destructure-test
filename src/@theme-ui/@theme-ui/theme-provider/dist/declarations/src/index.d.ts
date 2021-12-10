import React from 'react';
import { ThemeProviderProps as CoreThemeProviderProps } from '@theme-ui/core';
import { MDXProviderComponents } from '@theme-ui/mdx';
interface ThemeProviderProps extends Pick<CoreThemeProviderProps, 'theme'> {
    children?: React.ReactNode;
    components?: MDXProviderComponents;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export {};