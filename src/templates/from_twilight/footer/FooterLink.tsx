/** @jsx jsx */
import { jsx, Theme } from "@emotion/react";
import Flex from "../themeComponents/Flex";
import Link from "../../layouts/";
import { LinkHTMLAttributes, ReactNode } from "react";


interface Props {
  to: ReactNode|string;
  children:ReactNode;
}
const FooterLink= (props: Props) => {
  return (
    <Flex
      css={{ padding: layout === "horizontal" ? "0 24px 0 0" : "0 0 16px 0" }}
    >
      <Link to={props.to}>
        {props.children}
      </Link>
    </Flex>
  );
}
export default FooterLink;
/* export default function FooterLink({ to, children, layout }) {
  return (
    <Flex
      sx={{ padding: layout === "horizontal" ? "0 24px 0 0" : "0 0 16px 0" }}
    >
      <Link hideExternalIcon to={to}>
        {children}
      </Link>
    </Flex>
  );
} */