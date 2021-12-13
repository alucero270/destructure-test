import React, { ReactNode } from "react";
import { ThemeProvider } from "@emotion/react";
import { MDXProvider, MDXProviderComponents } from "@mdx-js/react";
import DataProvider from "./dataProvider/DataProvider";
import NavigationProvider from "./navigation/NavigationProvider";
import NavLoader from "./navigation/NavLoader";
import { MDX_SHORTCODES } from "./theme/common";
import DefaultLayout from "./DefaultLayout";
import DefaultTheme from "./theme/DefaultTheme";

interface Props {
  children?: React.ReactNode;
  pageContext?: MDXProviderComponents;
}

function LayoutIndex({ children, pageContext }: Props) {
  return (
    <DataProvider>
      <ThemeProvider theme={DefaultTheme}>
        <NavigationProvider>
          <NavLoader />
          <MDXProvider components={MDX_SHORTCODES}>
            <DefaultLayout pageContext={pageContext}>{children}</DefaultLayout>
          </MDXProvider>
        </NavigationProvider>
      </ThemeProvider>
    </DataProvider>
  );
}

export default LayoutIndex;
