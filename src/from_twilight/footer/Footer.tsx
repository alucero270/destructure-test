/** @jsx jsx */
import { css, useTheme } from "@emotion/react";
import { Flex } from "../themeComponents/Flex";
import {Box} from "../themeComponents/Box";
import Copyright from "../themeComponents/Copyright";
import MailerForm from "../themeComponents/MailerForm";
import FooterNav from "./FooterNav";
import SocialLinks from "../themeComponents/SocialLinks";

export default function Footer() {
  const theme = useTheme();
  return (
    <footer css={{ backgroundColor: theme.colors.navbar, fontSize: 14 }}>
      <Box py={4} px={[3, null, 0]}>
        <Flex css={{ flexDirection: ["column", null, "row"] }}>
          <Flex css={{ flex: 1, flexDirection: "column", order: [1, null, 0] }}>
            <Box py={2}>
              <FooterNav />
            </Box>
            <Box py={2}>
              <SocialLinks />
            </Box>
          </Flex>
          <MailerForm css={css` order: [0, null, 1] `} />
        </Flex>
        <Box py={2}>
          <Copyright />
        </Box>
      </Box>
    </footer>
  );
}
