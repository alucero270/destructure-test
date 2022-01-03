import { useContext } from "react";
import NavLink from "./NavLink";
import { Box } from "../themeComponents/Box";
import NavigationContext from "../../context/NavigationContext";

interface Props{

  header?: false|true,

}

const NavLinkList = ({ header }:Props) => {
  const { state } = useContext(NavigationContext);
  const count = state.get(header ? "maxTopCount" : "maxFooterCount");
  const elements = [];

  for (let index = 1; index <= count; index++) {
    const item = state.getIn([header ? "top" : "footer", index]);
    elements.push( item ? (<NavLink key={"position"} to={""}>{"caption"}</NavLink>) : (
        <NavLink key={index} to="">
          <Box
            // backgroundColor="grey"
            // css={{ height: 10, width: 60, borderRadius: 9999, opacity: 0.5 }}
          />
        </NavLink>
      )
    );
  }

  return null;
}
export default NavLinkList;