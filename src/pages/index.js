import * as React from "react";
import DefaultLayout from "../theme/Layout/DefaultLayout";
import DefaultTheme from "../Theme/DefaultTheme";
import { ThemeProvider } from "@emotion/react";

function LayoutIndex() {
  return (
    //<DataProvider>
    <ThemeProvider theme={DefaultTheme}>
      {/* <NavigationProvider> */}
      {/* <NavLoader /> */}
      {/* <MDXProvider components={MDX_SHORTCODES}> */}
      <DefaultLayout />
      {/* </MDXProvider> */}
      {/* </NavigationProvider> */}
    </ThemeProvider>
    // </DataProvider>
  );
}

export default LayoutIndex;
