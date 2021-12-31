/** @jsx jsx */
import React, { useState } from "react"
// import { jsx, css, useTheme } from "@emotion/react";
import Box from "../../elements/Box"
import Flex from "../../elements/Flex"
import { css, useTheme } from "@emotion/react"

const NavCollapse = () => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <React.Fragment>
      <Box
        css={css`display: ["initial", "null", "none"],
          marginLeft: "auto",
          p: 2,`}
        onClick={_e => setOpen(prev => !prev)}
      >
        {" "}
        <Flex
          css={css`position: ["fixed", "null", "initial"],
          left: ["100%", "null", "initial"],
          height: [
            "auto",
            "null",
            "auto",
          ],
          top: "[theme.sizes.navbarHeight]",
          backgroundColor: theme.colors.navbar,
          zIndex: 1090,
          flexDirection: ["column", "null", "row"],
          width: ["100vw", "null", "auto"],
          transform: open ? translateX(-100%) : "null",
          transition: "transform ease-in .12s",
          alignItems: "center",
          pl: [4, "null", 3],
          py: [4, "null", 0],`}
        >
          <div id="et_mobile_nav_menu">
            <div className="mobile_nav closed">
              <span className="select_page">Select Page</span>
              <span className="mobile_menu_bar mobile_menu_bar_toggle"></span>
              <ul id="mobile_menu" className="et_mobile_menu">
                <li
                  id="menu-item-224477"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-224477 et_first_mobile_item"
                >
                  <a href="https://www.elegantthemes.com/layouts/health-fitness/eye-doctor-blog-page/live-demo">
                    Blog
                  </a>
                </li>
                <li
                  id="menu-item-224479"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-224479"
                >
                  <a href="https://www.elegantthemes.com/layouts/health-fitness/eye-doctor-about-page/live-demo">
                    About
                  </a>
                </li>
                <li
                  id="menu-item-224481"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-224481"
                >
                  <a href="https://www.elegantthemes.com/layouts/health-fitness/eye-doctor-contact-page/live-demo">
                    Contact
                  </a>
                </li>
                <li
                  id="menu-item-224483"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-224483"
                >
                  <a href="https://www.elegantthemes.com/layouts/health-fitness/eye-doctor-service-page/live-demo">
                    Service
                  </a>
                </li>
                <li
                  id="menu-item-224485"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-224485"
                >
                  <a href="https://www.elegantthemes.com/layouts/health-fitness/eye-doctor-services-page/live-demo">
                    Services
                  </a>
                </li>
                <li
                  id="menu-item-224487"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-224487"
                >
                  <a href="https://www.elegantthemes.com/layouts/health-fitness/eye-doctor-home-page/live-demo">
                    Home
                  </a>
                </li>
                <li
                  id="menu-item-224489"
                  className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-224488 current_page_item menu-item-224489"
                >
                  <a
                    href="https://www.elegantthemes.com/layouts/health-fitness/eye-doctor-landing-page/live-demo"
                    aria-current="page"
                  >
                    Landing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Flex>
      </Box>
    </React.Fragment>
  )
}
export default NavCollapse
