import React from "react";
import { Record, List, RecordOf } from "immutable";
//import NavigationElement from "../layouts/navigation/NavigationElement";


type NavigationContextState = {
  top: List<NavigationElement>;
  footer: List<NavigationElement>;
  maxTopCount: number;
  maxFooterCount: number;
};

const NavigationContextStateRecord = Record<NavigationContextState>({
  top: List(),
  footer: List(),
  maxTopCount: 5,
  maxFooterCount: 10,
});


export class NavigationElement {
  /**
   * The positional index of this element.
   */
  position: /* key */ |number;

  /**
   * The text that describes this navigation element.
   */
  caption: string;

  /**
   * The location this element navigates to.
   */
  to: string;

  /**
   * Construct a new NavigationElement.
   * @param {number} position
   * @param {string} caption
   * @param {string} to
   */
  constructor(position: number, caption: string, to: string) {
    this.position = position;
    this.caption = caption;
    this.to = to;
  }
}

export class NavigationState {
  /**
   * Add a navigation element to the top nav. If an element already exists in the position requested,
   * it will be overwritten.
   */
  static addToTopNav(
    state: RecordOf<NavigationContextState>,
    element: NavigationElement,
  ): RecordOf<NavigationContextState> {
    let newState = state;

    const [_, found] = state
      .get("top")
      .findEntry(
        (e): boolean => e && e.caption === element.caption && e.to === element.to
      ) || [-1, undefined];

    if (found) {
      newState = state.deleteIn(["top", state.get("top").indexOf(found)]);
    }

    return newState.setIn(["top", element.position], element);
  }

  static createEmpty() {
    return NavigationContextStateRecord();
  }
}
/**
 * Provides context around navigation elements in the layouts of pages.
 */type NavigationContextType = {
  state: RecordOf<NavigationContextState>;
  update: (state: NavigationContextState) => void;
};
const defaultContextValue: NavigationContextType = {

  //The current navigation state record.{NavigationContextState}
  state: NavigationState.createEmpty(),
  //Updates the state.
  update: () => {}
  ,
};

export default React.createContext(defaultContextValue);
