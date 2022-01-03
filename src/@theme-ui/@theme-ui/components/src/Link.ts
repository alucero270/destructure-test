import { useTheme } from "@emotion/react";
import React from "react";
import Theme from "../../../../templates/from_twilight/Theme"
import Box from "./Box";

export const Link = React.forwardRef(function Link(props, ref) {
  const theme = useTheme
  return (
    <Box 
    ref={ref} 
    as="a" 
    variant="styles.a" 
    {...props} 
    __themeKey="links" />
  );
});
