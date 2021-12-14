/** @jsx jsx */
import {Box} from "../themeComponents/Box";
import Link from "../themeComponents/Link";
import { HTMLAttributes, ReactNode } from "react";
interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  to: string;
}

const NavLink = (({ children, to}: Props) => {
  return (
    <Box margin-right={3} >
      <Link to={to} target={""}>{children}</Link>
    </Box>
  );
});

export default NavLink;