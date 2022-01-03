/** @jsx jsx */
import React, { ReactNode, useState } from "react";
// import { jsx, css, useTheme } from "@emotion/react";
import {Box} from "../themeComponents/Box";
import { Flex } from "../themeComponents/Flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "@emotion/react/types/theming";

interface Props{
  children: ReactNode;

}

const NavCollapse= ({ children }:Props)=> {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Flex
        pl={[4, null, 3]}
        py={[4, null, 0]}
        stle={{
          position: ["fixed", null, "initial"],
          left: ["100%", null, "initial"],
          height: [`calc(100vh - ${theme.sizes.navbarHeight}px)`, null, "auto"],
          top: [theme.sizes.navbarHeight, null, "initial"],
          backgroundColor: theme.colors.navbar,
          zIndex: 1090,
          flexDirection: ["column", null, "row"],
          width: ["100vw", null, "auto"],
          transform: open ? `translateX(-100%)` : null,
          transition: "transform ease-in .12s",
          alignItems: "center",
        }}
      >
        {children}
      </Flex>
      <Box
        p={2}
        styles={{
          display: ["initial", null, "none"],
          marginLeft: "auto",
        }}
        onClick={(_e) => setOpen((prev) => !prev)}
      >
        <FontAwesomeIcon icon={["fal", open ? "times" : "bars"]} size="lg" />
      </Box>
    </React.Fragment>
  );
}
export default NavCollapse;