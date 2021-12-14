import NavigationContext, {
  NavigationState,
} from "../../context/NavigationContext";
import { ReactNode, useContext, useState } from "react";
interface Props {
  children: ReactNode;
  
}
const NavigationProvider = ({ children }: Props) => {
  
  const [state, update] = useState(NavigationState.createEmpty);
  return (
    <NavigationContext.Provider value={{ state, update}}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
