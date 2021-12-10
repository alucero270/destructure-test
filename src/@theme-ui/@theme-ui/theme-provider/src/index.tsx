import React from 'react'
import {
  jsx,
  
  // ThemeProvider as CoreProvider,
  // ThemeProviderProps as CoreThemeProviderProps,
  __themeUiDefaultContextValue,
} from '@emotion/styled';
import { css, Theme,useTheme, ThemeProvider, ThemeProviderProps } from '@emotion/react'
import { ColorModeProvider } from '@theme-ui/color-modes'
import { MDXProvider, MDXProviderComponents } from '@theme-ui/mdx'
import { Global } from '@emotion/react'

const RootStyles = () =>
  jsx(Global, {
    styles: (emotionTheme) => {
      const theme = emotionTheme as Theme
      const { useRootStyles } = theme.config || theme

      if (useRootStyles === false || (theme.styles && !theme.styles.root)) {
        return null
      }

      const boxSizing =
        theme.config?.useBorderBox === false ? undefined : 'border-box'

      return css({
        '*': {
          boxSizing,
        },
        html: {
          variant: 'styles.root',
        },
        body: {
          margin: 0,
        },
      })(theme)
    },
  })

interface ThemeProviderProps extends Pick<CoreThemeProviderProps, 'theme'> {
  children?: React.ReactNode
  components?: MDXProviderComponents
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  components,
  children,
}) => {
  const outer = useTheme()

  const isTopLevel = outer === __themeUiDefaultContextValue

  return (
    <CoreProvider theme={theme}>
      <ColorModeProvider>
        {isTopLevel && <RootStyles />}
        <MDXProvider components={components}>{children}</MDXProvider>
      </ColorModeProvider>
    </CoreProvider>
  )
}