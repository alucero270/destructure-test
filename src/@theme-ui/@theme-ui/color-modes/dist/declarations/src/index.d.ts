import React, { Dispatch, SetStateAction } from 'react';
declare module '@theme-ui/core' {
    interface ThemeUIContextValue {
        colorMode?: string;
        setColorMode?: (colorMode: SetStateAction<string | undefined>) => void;
    }
}
export declare function useColorMode<T extends string = string>(): [
    T,
    Dispatch<SetStateAction<T>>
];
export declare const ColorModeProvider: ({ children, }: {
    children?: React.ReactNode;
}) => JSX.Element;
export declare const InitializeColorMode: () => React.DetailedReactHTMLElement<{
    key: string;
    dangerouslySetInnerHTML: {
        __html: string;
    };
}, HTMLElement>;
