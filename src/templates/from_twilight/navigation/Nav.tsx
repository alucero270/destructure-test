/** @jsx jsx */
import { useTheme } from "@emotion/react";
import React, { ReactNode } from "react";
import { Box } from "../themeComponents/Box";

interface Props {
  children: ReactNode;
  height: string|number;
}

const Nav = (({children}: Props) => {
  const theme = useTheme();
  return(
    <nav 
    color={theme.colors.navbar}
    >
      <Box>
        {children}
      </Box>
    </nav>
  );
});
export default Nav
