import React, { useEffect, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import NavigationContext, {
  NavigationState,
  NavigationElement,
} from "../../context/NavigationContext";

export default function NavLoader() {
  const { state, update } = useContext(NavigationContext);
  const data = useStaticQuery(graphql`
    query {
      allComponentInMdx(filter: { component: { eq: "TopNav" } }) {
        nodes {
          attributes {
            name
            value
          }
          content
          mdx {
            fileAbsolutePath
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (data) {
      data.allComponentInMdx.nodes.forEach((node: { attributes: Array[]; content: string; }) => {
        const position = node.attributes.find(
          (v) => v.name === "position"
        ).value;
        const caption = node.content;
        const to = node.attributes.find((v) => v.name === "to").value;

        const found = state.getIn(["top", position]);
        if (found && found.caption === caption && found.to === to) {
          return;
        }

        update(
          NavigationState.addToTopNav(
            { state, element: new NavigationElement(position, caption, to) }          )
        );
      });
    }
  }, [data, state, update]);

  return null;
}
