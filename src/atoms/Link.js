import React from "react";
import Box from "./Box";

interface CustGatsbyLinkProps
  extends Omit<GatsbyLinkProps<Record<string, unknown>>, "ref"> {
    active
  }

export const Link = React.forwardRef(function Link(props, ref) {
  return (
    <Box ref={ref} as="a" variant="styles.a" {...props} __themeKey="links" />
  );
});
