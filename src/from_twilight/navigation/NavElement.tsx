
import { List } from "immutable";
import { useContext } from "react";

import NavigationContext, { NavigationElement, NavigationState } from "../../context/NavigationContext";
interface Props{

  position: /* key */ |number;

 
  caption: string;

 
  to: string;
}

const NavElement: (({position, caption, to}: Props)=>{
  const element = useContext(NavigationContext);
  element.state.getIn([element.state.top, "position"]) = position();
element.state.getIn([element.state.top, "caption"])
  element.state.getIn([element.state.top, "to"])
});
  


export default element.state.getIn(["position", "caption","to"]);
/* const NavigationElement=()
    this.position = position;
    this.caption = caption;
    this.to = to; */