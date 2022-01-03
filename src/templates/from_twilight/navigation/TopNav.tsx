import { useContext, useEffect } from "react";
import NavigationContext, {
  NavigationState,
  NavigationElement,
} from "../../context/NavigationContext";
/* interface Props extends NavigationElement {
  position: number;
  caption: string;
  to: string;
} */
/**
 * TopNav provides a method for pages to insert a link to themselves in the top navigation
 */
const TopNav = (position: number, caption: string, to: string):null => {
  const { state, update } = useContext(NavigationContext);

  useEffect(() => {
    update(
      NavigationState.addToTopNav(
        state,
        new NavigationElement(position, caption, to)
      )
    );
  }, []);

  return null;
};

export default TopNav;
